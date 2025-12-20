import { BaseProperty } from "../../types";

/**
 * SequenceFlow线的属性
 */
export const SequenceFlowProperties: BaseProperty[] = [
    {
        key: "id",
        label: "节点 ID",
        type: "string",
        required: true,
        group: "基础信息",
        xml: {
            attr: "id"
        },
        validate: {
            required: true
        }
    },
    {
        key: "name",
        label: "名称",
        type: "string",
        defaultValue: "",
        group: "基础信息",
        xml: {
            attr: "name"
        },
        validate: {
            required: true
        }
    },
    {
        key: "sourceRef",
        label: "来源节点",
        type: "string",
        required: true,
        group: "基础信息",
        xml: {
            attr: "sourceRef"
        },
        validate: {
            required: true
        }
    },
    {
        key: "targetRef",
        label: "目标节点",
        type: "string",
        required: true,
        group: "基础信息",
        xml: {
            attr: "targetRef"
        },
        validate: {
            required: true
        }
    },
    {
        key: "conditionExpression",
        label: "执行条件",
        type: "string",
        required: true,
        group: "基础信息",
        xml: {
            element: "conditionExpression"
        },
        validate: {
            required: true
        }
    }
];
