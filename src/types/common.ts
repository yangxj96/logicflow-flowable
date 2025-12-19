/**
 * UI配置
 */
export interface UI {
    /** 组件级配置 */
    props?: Record<string, any>;
    /** 下拉选项（静态） */
    options?: Array<{ label: string; value: any }>;
    /** 触发事件名称（交给使用方） */
    onEvent?: string;
}

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
 * 表单验证
 */
export interface Validate {
    // 是否必填
    required?: boolean;
    // 验证规则KEY
    ruleKey?: string;
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
    ui?: UI;
    validate?: Validate;
}
