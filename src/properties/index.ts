import { UserTaskProperties } from "./tasks/user-task";
import { StartEventProperties } from "./events/start";
import { EndEventProperties } from "./events/end";
import { ProcessProperties } from "./process/process";

export const NodeTypeToProperties: Record<string, any[]> = {
    "bpmn:process": ProcessProperties,
    "bpmn:userTask": UserTaskProperties,
    "bpmn:startEvent": StartEventProperties,
    "bpmn:endEvent": EndEventProperties
};
