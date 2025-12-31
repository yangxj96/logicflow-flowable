import { NodeBehavior } from "../../../types";
import { NODE_TYPES } from "../../../core/constants";

export const ParallelGatewayBehavior: NodeBehavior = {
    /* ===== 拓扑约束 ===== */

    allowIn: true,
    allowOut: true,

    // 并行网关允许 1 入多出 或 多入 1 出
    minIn: 1,
    minOut: 1,

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
        // 并行网关不允许重复边
        allowMultipleBetweenSameNodes: false,

        // 并行网关所有边都不能有条件
        mustHaveCondition: false
    },

    /* ===== 运行语义（流程合法性） ===== */

    validate({ inCount, outCount }) {
        // 至少存在一进一出
        if (inCount < 1 || outCount < 1) {
            return "并行网关至少需要一条入线和一条出线";
        }

        // 并行网关不能同时是“多入多出”
        // 否则会造成语义不清晰（BPMN 明确不推荐）
        if (inCount > 1 && outCount > 1) {
            return "并行网关不能同时存在多条入线和多条出线";
        }
    }
};

