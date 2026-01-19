import { NodeBehavior } from "../../../../types";
import { NODE_TYPES } from "../../../../core/constants";

/**
 * 用户任务行为验证
 */
export const UserTaskBehavior: NodeBehavior = {
    /* ===== 拓扑 ===== */

    allowIn: true,
    allowOut: true,

    minIn: 1,
    maxIn: 1,

    minOut: 1,
    maxOut: 1,

    /* ===== 连接语义 ===== */

    allowSourceTypes: [
        NODE_TYPES.START_EVENT,
        NODE_TYPES.EXCLUSIVE_GATEWAY,
        NODE_TYPES.INCLUSIVE_GATEWAY,
        NODE_TYPES.PARALLEL_GATEWAY,
        NODE_TYPES.USER_TASK,
        NODE_TYPES.SERVICE_TASK,
        NODE_TYPES.SCRIPT_TASK,
        NODE_TYPES.RECEIVE_TASK
    ],

    allowTargetTypes: [
        NODE_TYPES.EXCLUSIVE_GATEWAY,
        NODE_TYPES.INCLUSIVE_GATEWAY,
        NODE_TYPES.PARALLEL_GATEWAY,
        NODE_TYPES.USER_TASK,
        NODE_TYPES.SERVICE_TASK,
        NODE_TYPES.SCRIPT_TASK,
        NODE_TYPES.RECEIVE_TASK,
        NODE_TYPES.END_EVENT
    ],

    /* ===== 边约束 ===== */

    edge: {
        allowMultipleBetweenSameNodes: false,
        mustHaveCondition: false
    },

    validate({ inCount, outCount }) {
        if (inCount !== 1 || outCount !== 1) {
            return "用户任务必须且只能有一条入线和一条出线";
        }
    }
};

