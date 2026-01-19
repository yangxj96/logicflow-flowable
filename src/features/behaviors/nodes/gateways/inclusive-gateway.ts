import { NodeBehavior } from "../../../../types";
import { NODE_TYPES } from "../../../../core/constants";

export const InclusiveGatewayBehavior: NodeBehavior = {
    /* ===== 拓扑约束 ===== */

    allowIn: true,
    allowOut: true,

    minIn: 1,
    minOut: 2,

    /* ===== 连接语义 ===== */

    allowSourceTypes: [
        NODE_TYPES.START_EVENT,
        NODE_TYPES.USER_TASK,
        NODE_TYPES.SERVICE_TASK,
        NODE_TYPES.EXCLUSIVE_GATEWAY,
        NODE_TYPES.INCLUSIVE_GATEWAY,
        NODE_TYPES.PARALLEL_GATEWAY
    ],

    allowTargetTypes: [
        NODE_TYPES.USER_TASK,
        NODE_TYPES.SERVICE_TASK,
        NODE_TYPES.EXCLUSIVE_GATEWAY,
        NODE_TYPES.INCLUSIVE_GATEWAY,
        NODE_TYPES.PARALLEL_GATEWAY,
        NODE_TYPES.END_EVENT
    ],

    /* ===== 边级别约束 ===== */

    edge: {
        // OR 网关不允许重复边
        allowMultipleBetweenSameNodes: false,

        // 和 XOR 一样，每条出线都需要条件
        mustHaveCondition: true,

        allowDefaultFlow: true,

        maxDefaultFlow: 1
    },

    /* ===== 运行语义（流程合法性） ===== */

    validate({ inCount, outCount }) {
        if (inCount < 1) {
            return "包容网关至少需要一条入线";
        }

        if (outCount < 2) {
            return "包容网关至少需要两条出线";
        }
    }
};
