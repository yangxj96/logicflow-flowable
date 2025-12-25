import { NodeBehavior } from "../../../types";
import { NODE_TYPES } from "../../../core/constants";

/**
 * 用户任务行为验证
 */
export const ServiceTaskBehavior: NodeBehavior = {
    allowIn: true,
    allowOut: true,
    minIn: 1,
    minOut: 1,
    maxIn: 1,

    allowSourceTypes: [
        // 事件
        NODE_TYPES.START_EVENT,
        // 网关
        NODE_TYPES.EXCLUSIVE_GATEWAY,
        NODE_TYPES.INCLUSIVE_GATEWAY,
        NODE_TYPES.PARALLEL_GATEWAY
    ],

    allowTargetTypes: [
        // 事件
        NODE_TYPES.END_EVENT,
        // 网关
        NODE_TYPES.EXCLUSIVE_GATEWAY,
        NODE_TYPES.INCLUSIVE_GATEWAY,
        NODE_TYPES.PARALLEL_GATEWAY
    ]
};
