import { Property } from "../../types";
import { CommonNodeProperties } from "../base";

/**
 * 结束事件节点属性
 */
export const EndEventProperties: Property[] = [
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
