export interface ProcessMeta {
    id: string;
    name: string;
    documentation?: string;
    isExecutable: boolean;
}

export interface XmlMeta {
    // 作为属性导出
    attr?: string;
    // 作为子节点导出（预留）
    element?: string;
    // 命名空间（可选）
    namespace?: string;
}

export interface BaseProperty {
    key: string;
    label: string;
    type: "string" | "number" | "boolean" | "select";
    required?: boolean;
    defaultValue?: any;
    group: string;
    xml?: XmlMeta;
    validate?: {
        required?: boolean;
        ruleKey?: string;
    }
}

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
