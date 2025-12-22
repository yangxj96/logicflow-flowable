import { UserTaskProperties } from "./tasks/user-task";
import { StartEventProperties } from "./events/start";
import { EndEventProperties } from "./events/end";
import { ProcessProperties } from "./process/process";
import { NodeType, Property } from "../types";
import { ExclusiveGatewayProperties } from "./gateways/exclusive-gateway";
import { ReceiveTaskProperties } from "./tasks/receive-task";
import { ScriptTaskProperties } from "./tasks/script-task";
import { ServiceTaskProperties } from "./tasks/service-task";
import { NODE_TYPES } from "../core/constants";
import { SequenceFlowProperties } from "./edges/sequence-flow";
import { InclusiveGatewayProperties } from "./gateways/inclusive-gateway";
import { ParallelGatewayProperties } from "./gateways/parallel-gateway";

/**
 * 节点类型映射属性对象
 */
export const NodeTypeToProperties: Partial<Record<NodeType, Property[]>> = {
    // 特殊节点,流程定义
    [NODE_TYPES.PROCESS]: ProcessProperties,
    // 连线
    [NODE_TYPES.SEQUENCE_FLOW]: SequenceFlowProperties,
    // 网关部分
    [NODE_TYPES.EXCLUSIVE_GATEWAY]: ExclusiveGatewayProperties,
    [NODE_TYPES.INCLUSIVE_GATEWAY]: InclusiveGatewayProperties,
    [NODE_TYPES.PARALLEL_GATEWAY]: ParallelGatewayProperties,
    // 任务节点部分
    [NODE_TYPES.RECEIVE_TASK]: ReceiveTaskProperties,
    [NODE_TYPES.SCRIPT_TASK]: ScriptTaskProperties,
    [NODE_TYPES.SERVICE_TASK]: ServiceTaskProperties,
    [NODE_TYPES.USER_TASK]: UserTaskProperties,
    // 事件部分
    [NODE_TYPES.START_EVENT]: StartEventProperties,
    [NODE_TYPES.END_EVENT]: EndEventProperties
};

/**
 * 节点类型映射节点名称
 */
export const NodeTypeToName: Partial<Record<NodeType, string>> = {
    // 特殊节点,流程定义
    [NODE_TYPES.PROCESS]: "流程定义",
    // 连线
    [NODE_TYPES.SEQUENCE_FLOW]: "顺序流",
    // 网关部分
    [NODE_TYPES.EXCLUSIVE_GATEWAY]: "排他网关",
    [NODE_TYPES.INCLUSIVE_GATEWAY]: "包容网关",
    [NODE_TYPES.PARALLEL_GATEWAY]: "并行网关",
    // 任务节点部分
    [NODE_TYPES.RECEIVE_TASK]: "接收任务",
    [NODE_TYPES.SCRIPT_TASK]: "脚本任务",
    [NODE_TYPES.SERVICE_TASK]: "服务任务",
    [NODE_TYPES.USER_TASK]: "用户任务",
    // 事件部分
    [NODE_TYPES.START_EVENT]: "开始事件",
    [NODE_TYPES.END_EVENT]: "结束事件"
};
