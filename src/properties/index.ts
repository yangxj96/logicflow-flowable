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

/**
 * 节点类型映射属性对象
 */
export const NodeTypeToProperties: Partial<Record<NodeType | string, Property[]>> = {
    // 特殊节点,流程定义
    [NODE_TYPES.PROCESS]: ProcessProperties,
    // 连线
    [NODE_TYPES.SEQUENCE_FLOW]: SequenceFlowProperties,
    // 网关部分
    [NODE_TYPES.EXCLUSIVE_GATEWAY]: ExclusiveGatewayProperties,
    // 任务节点部分
    [NODE_TYPES.RECEIVE_TASK]: ReceiveTaskProperties,
    [NODE_TYPES.SCRIPT_TASK]: ScriptTaskProperties,
    [NODE_TYPES.SERVICE_TASK]: ServiceTaskProperties,
    [NODE_TYPES.USER_TASK]: UserTaskProperties,
    // 事件部分
    [NODE_TYPES.START_EVENT]: StartEventProperties,
    [NODE_TYPES.END_EVENT]: EndEventProperties
};
