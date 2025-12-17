import { BaseProperty, CommonNodeProperties } from "../base";

export const EndEventProperties: BaseProperty[] = [
    ...CommonNodeProperties,
    {
        key: "terminate",
        label: "终止流程",
        type: "boolean",
        defaultValue: true,
        group: "扩展信息",
        xml: {
            element: "bpmn:terminateEventDefinition"
        }
    }
];
