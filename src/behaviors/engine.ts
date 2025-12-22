import LogicFlow from "@logicflow/core";
import { BehaviorsBase, EdgeValidateContext, NodeValidateContext, ValidateResult } from "../types";

export class BehaviorsEngine {

    constructor(private readonly lf: LogicFlow) {
    }

    /* ================= 连线校验 ================= */

    validateEdge(context: EdgeValidateContext): ValidateResult {
        const { source, target, edge } = context;

        // source 规则
        if (this.hasBehavior(source)) {
            const behavior = source.getBehavior();

            if (behavior.allowOut === false) {
                return { valid: false, message: "该节点不能作为出线节点" };
            }

            if (behavior.maxOut !== undefined && source.outgoing.edges.length > behavior.maxOut) {
                return { valid: false, message: "出线数量超过限制" };
            }

            if (behavior.allowTargetTypes && !behavior.allowTargetTypes.includes(target.type as any)) {
                return { valid: false, message: "不允许连接到该类型节点" };
            }
        }

        // target 规则
        if (this.hasBehavior(target)) {
            const behavior = target.getBehavior();

            if (behavior.allowIn === false) {
                return { valid: false, message: "该节点不能作为入线节点" };
            }

            if (behavior.maxIn !== undefined && target.incoming.edges.length > behavior.maxIn) {
                return { valid: false, message: "入线数量超过限制" };
            }

            if (behavior.allowSourceTypes && !behavior.allowSourceTypes.includes(source.type as any)) {
                return { valid: false, message: "不允许从该类型节点连入" };
            }
        }

        return { valid: true };
    }

    /* ================= 节点校验 ================= */

    validateNode(context: NodeValidateContext): ValidateResult[] {
        const { node, behavior } = context;
        const inCount = node.incoming.edges.length;
        const outCount = node.outgoing.edges.length;

        const errors: ValidateResult[] = [];

        if (behavior.minIn !== undefined && inCount < behavior.minIn) {
            errors.push({ valid: false, message: "入线数量不足" });
        }

        if (behavior.minOut !== undefined && outCount < behavior.minOut) {
            errors.push({ valid: false, message: "出线数量不足" });
        }

        if (behavior.validate) {
            const msg = behavior.validate({ inCount, outCount });
            if (msg) errors.push({ valid: false, message: msg });
        }

        return errors;
    }

    /* ================= 全流程校验 ================= */

    validateGraph(): ValidateResult[] {
        const results: ValidateResult[] = [];

        // 线获取数据
        let graph = this.lf.getGraphData();
        if (graph) {
            (graph as LogicFlow.GraphData).nodes.forEach(node => {
                if (!this.hasBehavior(node)) return;
                const behavior = node.getBehavior();
                results.push(...this.validateNode({ node: this.lf.getNodeModelById(node.id)!, behavior }));
            });
        } else {
            results.push({
                valid: false,
                message: "未获取到节点数据"
            });
        }

        return results;
    }

    /**
     * 类型守卫,判断是否带有行为
     * @param node 节点
     */
    hasBehavior(node: LogicFlow.NodeData): node is LogicFlow.NodeData & BehaviorsBase {
        return typeof (node as any).getBehavior === "function";
    }

}
