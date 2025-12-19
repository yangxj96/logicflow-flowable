import { UserTaskProperties } from "./tasks/user-task";
import { StartEventProperties } from "./events/start";
import { EndEventProperties } from "./events/end";
import { ProcessProperties } from "./process/process";
import { BaseProperty } from "../types";
import { ExclusiveGatewayProperties } from "./gateways/exclusive-gateway";
import { ReceiveTaskProperties } from "./tasks/receive-task";
import { ScriptTaskProperties } from "./tasks/script-task";
import { ServiceTaskProperties } from "./tasks/service-task";

/**
 * 节点类型映射属性对象
 */
export const NodeTypeToProperties: Record<string, BaseProperty[]> = {
    // 特殊节点,流程定义
    "bpmn:process": ProcessProperties,
    // 网关部分
    "bpmn:exclusiveGateway": ExclusiveGatewayProperties,
    // 任务节点部分
    "bpmn:receiveTask": ReceiveTaskProperties,
    "bpmn:scriptTask": ScriptTaskProperties,
    "bpmn:serviceTask": ServiceTaskProperties,
    "bpmn:userTask": UserTaskProperties,
    // 事件部分
    "bpmn:startEvent": StartEventProperties,
    "bpmn:endEvent": EndEventProperties
};
