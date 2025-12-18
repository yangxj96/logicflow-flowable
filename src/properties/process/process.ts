import { BaseProperty } from "../../types";

/**
 * 流程节点属性
 */
export const ProcessProperties: BaseProperty[] = [
    {
        key: "id",
        label: "流程 ID",
        type: "string",
        required: true,
        group: "流程定义",
        xml: {
            attr: "id"
        }
    },
    {
        key: "name",
        label: "流程名称",
        type: "string",
        group: "流程定义",
        xml: {
            attr: "name"
        }
    },
    {
        key: "isExecutable",
        label: "是否可执行",
        type: "boolean",
        defaultValue: true,
        group: "流程定义",
        xml: {
            attr: "isExecutable"
        }
    },
    {
        key: "documentation",
        label: "流程描述",
        type: "string",
        group: "流程定义",
        xml: {
            element: "documentation",
            namespace: "bpmn"
        }
    }
];
