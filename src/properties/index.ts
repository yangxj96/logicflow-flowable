import { UserTaskProperties } from "./tasks/user-task";
import { StartEventProperties } from "./events/start";
import { EndEventProperties } from "./events/end";
import { ProcessProperties } from "./process/process";
import { BaseProperty } from "../types";

/**
 * 节点类型映射属性对象
 */
export const NodeTypeToProperties: Record<string, BaseProperty[]> = {
    "bpmn:process": ProcessProperties,
    "bpmn:userTask": UserTaskProperties,
    "bpmn:startEvent": StartEventProperties,
    "bpmn:endEvent": EndEventProperties
};
