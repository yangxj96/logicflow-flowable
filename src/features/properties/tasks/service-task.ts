import { CommonNodeProperties } from "../base";
import { Property } from "../../../types";

/**
 * 用户任务节点属性
 */
export const ServiceTaskProperties: Property[] = [
    ...CommonNodeProperties,
    {
        key: "class",
        label: "全类名",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "flowable:class"
        }
    },
    {
        key: "expression",
        label: "SpEL表达式",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "flowable:expression"
        }
    },
    {
        key: "delegateExpression",
        label: "Bean表达式",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "flowable:delegateExpression"
        }
    },
    {
        key: "type",
        label: "服务类型",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "flowable:type"
        }
    },
    {
        key: "resultVariable",
        label: "流程变量",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "flowable:resultVariable"
        }
    }
];
