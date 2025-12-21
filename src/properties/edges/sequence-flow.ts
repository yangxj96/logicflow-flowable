import { Property } from "../../types";

/**
 * SequenceFlow线的属性
 */
export const SequenceFlowProperties: Property[] = [
    {
        key: "id",
        label: "节点 ID",
        type: "string",
        group: "基础信息",
        xml: {
            attr: "id"
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
        }
    },
    {
        key: "sourceRef",
        label: "来源节点",
        type: "string",
        group: "基础信息",
        xml: {
            attr: "sourceRef"
        }
    },
    {
        key: "targetRef",
        label: "目标节点",
        type: "string",
        group: "基础信息",
        xml: {
            attr: "targetRef"
        }
    },
    {
        key: "conditionExpression",
        label: "执行条件",
        type: "textarea",
        group: "基础信息",
        xml: {
            namespace: "bpmn",
            element: "conditionExpression",
            elementAttrs: {
                "xsi:type": "bpmn:tFormalExpression"
            },
            kind: "cdata"
        }
    }
];
