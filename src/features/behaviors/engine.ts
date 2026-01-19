import type { BaseNodeModel } from "@logicflow/core";
import LogicFlow from "@logicflow/core";
import { BehaviorsBase, EdgeValidateContext, NodeValidateContext, ValidateResult } from "../../types";

/**
 * 行为验证引擎
 */
export class BehaviorsEngine {

    constructor(private readonly lf: LogicFlow) {
    }

    /**
     * 连线校验
     * @param context 连线校验上下文
     */
    validateEdge(context: EdgeValidateContext): ValidateResult {
        const { source, target } = context;

        // source 节点规则
        if (this.hasBehavior(source)) {
            const behavior = source.getBehavior();

            // 允许出线
            if (behavior.allowOut === false) {
                return this.error("该节点不能作为出线节点");
            }

            // 最大出线
            if (behavior.maxOut !== undefined && source.outgoing.edges.length > behavior.maxOut) {
                return this.error("出线数量超过限制");
            }

            // 不允许连接到该类型节点
            if (behavior.allowTargetTypes && !behavior.allowTargetTypes.includes(target.type as any)) {
                return this.error("不允许连接到该类型节点");
            }

            // 连线行为规则
            const edgeBehavior = behavior.edge;
            if (edgeBehavior) {

                // 不允许同一节点之间多条边
                if (edgeBehavior.allowMultipleBetweenSameNodes === false) {
                    const sameEdges = source.outgoing.edges.filter(e =>
                        e.targetNodeId === target.id
                    );
                    if (sameEdges.length > 1) {
                        return this.error("不允许在相同节点之间创建多条连线");
                    }
                }

                if (edgeBehavior.validateOnCreate) {
                    const msg = edgeBehavior.validateOnCreate(context);
                    if (msg) return this.error(msg);
                }
            }
        }

        // target 节点规则
        if (this.hasBehavior(target)) {
            const behavior = target.getBehavior();

            // 是否允许出线
            if (behavior.allowIn === false) {
                return this.error("该节点不能作为入线节点");
            }

            // 出线数量
            if (behavior.maxIn !== undefined && target.incoming.edges.length > behavior.maxIn) {
                return this.error("入线数量超过限制");
            }

            // 允许连接到的目标类型
            if (behavior.allowSourceTypes && !behavior.allowSourceTypes.includes(source.type as any)) {
                return this.error("不允许从该类型节点连入");
            }
        }

        // 无错误响应
        return { message: "", valid: true };
    }

    /**
     * 节点校验
     * @param context 节点校验上下文
     */
    validateNode(context: NodeValidateContext): ValidateResult[] {
        const { node, behavior } = context;
        const inCount = node.incoming.edges.length;
        const outCount = node.outgoing.edges.length;
        const outEdges = node.outgoing.edges;

        const results: ValidateResult[] = [];

        // 最小如线数量验证
        if (behavior.minIn !== undefined && inCount < behavior.minIn) {
            results.push(this.error("入线数量不足"));
        }

        // 最小出线数量验证
        if (behavior.minOut !== undefined && outCount < behavior.minOut) {
            results.push(this.error("出线数量不足"));
        }

        // 默认连线校验（关键）
        const edgeBehavior = behavior.edge;
        if (edgeBehavior?.allowDefaultFlow) {

            const defaultEdges = outEdges.filter(e => e.getProperties()?.isDefault === true);

            if (edgeBehavior.maxDefaultFlow !== undefined && defaultEdges.length > edgeBehavior.maxDefaultFlow) {
                results.push({
                    valid: false,
                    nodeId: node.id,
                    message: "默认连线只能存在一条",
                    code: "GATEWAY_DEFAULT_FLOW_DUPLICATE"
                });
            }

            // default flow 不能有条件
            defaultEdges.forEach(e => {
                if (e.getProperties()?.condition) {
                    results.push({
                        valid: false,
                        edgeId: e.id,
                        message: "默认连线不能配置条件",
                        code: "DEFAULT_FLOW_HAS_CONDITION"
                    });
                }
            });

            // 非 default 的出线必须有条件
            outEdges
                .filter(e => !e.getProperties()?.isDefault)
                .forEach(e => {
                    if (!e.getProperties()?.condition) {
                        results.push({
                            valid: false,
                            edgeId: e.id,
                            message: "非默认连线必须配置条件",
                            code: "GATEWAY_CONDITION_REQUIRED"
                        });
                    }
                });
        }

        // 节点校验方法校验
        if (behavior.validate) {
            const msg = behavior.validate({ node, inCount, outCount });
            if (msg) {
                results.push(
                    this.error(msg, { nodeId: node.id, code: "NODE_CUSTOM_VALIDATE" })
                );
            }
        }

        return results;
    }

    /**
     * Graph校验(全局校验)
     */
    validateGraph(): ValidateResult[] {
        const results: ValidateResult[] = [];
        const graph = this.lf.getGraphData() as LogicFlow.GraphData;

        if (!graph) return [this.error("未获取到流程数据")];

        graph.nodes.forEach(n => {
            const nodeModel = this.lf.getNodeModelById(n.id);
            if (!nodeModel || !this.hasBehavior(nodeModel)) return;

            const behavior = nodeModel.getBehavior();
            results.push(
                ...this.validateNode({ node: nodeModel, behavior })
            );
        });

        // 连线软规则校验
        graph.edges.forEach(e => {
            const edge = this.lf.getEdgeModelById(e.id);
            const source = this.lf.getNodeModelById(e.sourceNodeId);

            if (!edge || !source || !this.hasBehavior(source)) return;

            const edgeBehavior = source.getBehavior()?.edge;

            if (edgeBehavior?.validateOnGraph) {
                const msg = edgeBehavior.validateOnGraph({
                    source,
                    target: this.lf.getNodeModelById(e.targetNodeId)!,
                    edge
                });
                if (msg) results.push(this.error(msg));
            }

        });

        return results;
    }

    /**
     * 节点是否存在行为
     * @param node 节点
     * @private
     */
    private hasBehavior(node: BaseNodeModel): node is BaseNodeModel & BehaviorsBase {
        return typeof (node as any).getBehavior === "function";
    }

    /**
     * 错误消息
     * @param message 消息
     * @param extra 扩展参数
     * @private
     */
    private error(message: string, extra?: Partial<ValidateResult>): ValidateResult {
        return {
            valid: false,
            level: "error",
            message,
            ...extra
        };
    }
}
