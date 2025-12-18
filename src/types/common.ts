
/**
 * XML元数据
 */
export interface XmlMeta {
    // 作为属性导出
    attr?: string;
    // 作为子节点导出（预留）
    element?: string;
    // 命名空间（可选）
    namespace?: string;
}

/**
 * 基础属性对象
 */
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
    };
}
