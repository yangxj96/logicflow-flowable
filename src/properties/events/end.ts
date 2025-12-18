import { CommonNodeProperties } from "../base";
import { BaseProperty } from "../../types";

/**
 * 结束事件节点属性
 */
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
