import LogicFlow from "@logicflow/core";
import { BehaviorsBase, ValidateResult } from "../types";

export class BehaviorsEngine {

    constructor(private readonly lf: LogicFlow) {
    }

    /* ================= 连线校验 ================= */

    validateEdge(edgeId: string): ValidateResult {
        const edge = this.lf.getEdgeModelById(edgeId);
        if (!edge) return { valid: true };

        const source = this.lf.getNodeModelById(edge.sourceNodeId);
        const target = this.lf.getNodeModelById(edge.targetNodeId);
        if (!source || !target) return { valid: true };

        /* source */
        if (this.hasBehavior(source)) {
            const behavior = source.getBehavior();

            if (behavior.allowOut === false) {
                return { valid: false, message: "该节点不能作为出线节点" };
            }

            if (
                behavior.maxOut !== undefined &&
                source.outgoing.edges.length > behavior.maxOut
            ) {
                return { valid: false, message: "出线数量超过限制" };
            }

            if (
                behavior.allowTargetTypes &&
                !behavior.allowTargetTypes.includes(target.type as any)
            ) {
                return { valid: false, message: "不允许连接到该类型节点" };
            }
        }

        /* target */
        if (this.hasBehavior(target)) {
            const behavior = target.getBehavior();

            if (behavior.allowIn === false) {
                return { valid: false, message: "该节点不能作为入线节点" };
            }

            if (
                behavior.maxIn !== undefined &&
                target.incoming.edges.length > behavior.maxIn
            ) {
                return { valid: false, message: "入线数量超过限制" };
            }

            if (
                behavior.allowSourceTypes &&
                !behavior.allowSourceTypes.includes(source.type as any)
            ) {
                return { valid: false, message: "不允许从该类型节点连入" };
            }
        }

        return { valid: true };
    }

    /* ================= 节点校验 ================= */

    validateNode(nodeId: string): ValidateResult[] {
        const node = this.lf.getNodeModelById(nodeId);
        if (!node || !this.hasBehavior(node)) return [];

        const behavior = node.getBehavior();
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

        // @ts-ignore
        this.lf.getGraphData().nodes.forEach((n) => {
            results.push(...this.validateNode(n.id));
        });

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
