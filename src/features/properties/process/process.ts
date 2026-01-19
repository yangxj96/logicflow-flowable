import { Property } from "../../../types";

/**
 * 流程节点属性
 */
export const ProcessProperties: Property[] = [
    {
        key: "id",
        label: "流程 ID",
        type: "string",
        group: "流程定义",
        xml: {
            attr: "id"
        },
        ui: {
            disabled: true
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
        key: "documentation",
        label: "流程描述",
        type: "textarea",
        group: "流程定义",
        xml: {
            element: "bpmn:documentation"
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
    }
];
