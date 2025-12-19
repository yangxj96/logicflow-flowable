import { CommonNodeProperties } from "../base";
import { BaseProperty } from "../../types";

/**
 * 用户任务节点属性
 */
export const ScriptTaskProperties: BaseProperty[] = [
    ...CommonNodeProperties,
    {
        key: "scriptFormat",
        label: "脚本语言",
        type: "select",
        group: "扩展信息",
        ui: {
            options: [
                { label: "JavaScript", value: "javascript" },
                { label: "Groovy", value: "groovy" }
            ]
        },
        xml: {
            attr: "scriptFormat"
        }
    },
    {
        key: "script",
        label: "脚本内容",
        type: "string",
        group: "扩展信息",
        xml: {
            element: "bpmn:script"
        }
    }
];
