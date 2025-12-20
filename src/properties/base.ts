import { BaseProperty } from "../types";

/**
 * 通用节点属性
 */
export const CommonNodeProperties: BaseProperty[] = [
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
        label: "节点名称",
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
        key: "documentation",
        label: "描述",
        type: "string",
        defaultValue: "",
        group: "基础信息",
        xml: {
            element: "bpmn:documentation"
        }
    }
];
