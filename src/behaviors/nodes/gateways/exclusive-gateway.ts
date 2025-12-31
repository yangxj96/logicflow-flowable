import { NodeBehavior } from "../../../types";
import { NODE_TYPES } from "../../../core/constants";

export const ExclusiveGatewayBehavior: NodeBehavior = {
    /* ===== 拓扑约束 ===== */

    allowIn: true,
    allowOut: true,

    minIn: 1,
    minOut: 2,

    /* ===== 连接语义 ===== */

    // 允许哪些节点连到它
    allowSourceTypes: [
        NODE_TYPES.START_EVENT,
        NODE_TYPES.USER_TASK,
        NODE_TYPES.SERVICE_TASK,
        NODE_TYPES.EXCLUSIVE_GATEWAY,
        NODE_TYPES.PARALLEL_GATEWAY
    ],

    // 它可以连向哪些节点
    allowTargetTypes: [
        NODE_TYPES.USER_TASK,
        NODE_TYPES.SERVICE_TASK,
        NODE_TYPES.EXCLUSIVE_GATEWAY,
        NODE_TYPES.PARALLEL_GATEWAY,
        NODE_TYPES.END_EVENT
    ],

    /* ===== 边级别约束 ===== */

    edge: {
        allowMultipleBetweenSameNodes: false,
        mustHaveCondition: true,
        allowDefaultFlow: true,
        maxDefaultFlow: 1,
        validateOnCreate({ source, target, edge }) {
            console.log("创建校验:", source, target, edge);
        },
        validateOnGraph({ source, target, edge }) {
            console.log("全局校验:", source, target, edge);
            const condition = edge.getProperties()?.condition;
            if (!condition) {
                return "该网关的连线必须配置条件";
            }
        }
    },

    validate({ node, inCount, outCount }) {
        console.log("节点方法校验:", node, inCount, outCount);
        const edges = node.outgoing.edges;
        const defaults = edges.filter(
            (e: any) => e.getProperties()?.isDefault === true
        );

        if (defaults.length !== 1) {
            return "排他网关必须且只能有一条默认连线";
        }
    }

};
