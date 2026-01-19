import { NodeBehavior } from "../../../../types";
import { NODE_TYPES } from "../../../../core/constants";

/**
 * 结束事件行为
 */
export const EndEventBehavior: NodeBehavior = {
    allowIn: true,
    allowOut: false,
    maxIn: 1,

    allowSourceTypes: [
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
            return "结束事件必须至少有一条入线";
        }
    }
};
