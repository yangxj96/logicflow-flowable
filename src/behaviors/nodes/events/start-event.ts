import { NodeBehavior } from "../../../types";
import { NODE_TYPES } from "../../../core/constants";

/**
 * 开始事件行为
 */
export const StartEventBehavior: NodeBehavior = {
    allowIn: false,
    allowOut: true,
    maxOut: 1,

    allowTargetTypes: [
        // 任务
        NODE_TYPES.RECEIVE_TASK,
        NODE_TYPES.SCRIPT_TASK,
        NODE_TYPES.SERVICE_TASK,
        NODE_TYPES.USER_TASK,
        // 网关
        NODE_TYPES.EXCLUSIVE_GATEWAY,
        NODE_TYPES.INCLUSIVE_GATEWAY,
        NODE_TYPES.PARALLEL_GATEWAY
    ],



    validate({ inCount }) {
        if (inCount === 0) {
            return "开始事件必须至少有一条出线";
        }
    }
};
