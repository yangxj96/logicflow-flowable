// TODO 构思中

/**
 * 基础属性对象
 */
export interface PropertyBase {
    key: string;
    label: string;
    group: string;
    defaultValue?: any;
}

/**
 * 表单类型对象
 */
export interface PropertyForm {
    type: "string" | "textarea" | "number" | "boolean" | "select";
}

/**
 * UI相关配置
 */
export interface PropertyUI {
    disabled?: boolean;
    props?: Record<string, any>;
}

/**
 * 表单验证相关对象
 */
export interface PropertyValidation {
    validate?: {
        // 是否必填
        required?: boolean;
        // 验证规则KEY
        ruleKey?: string;
    };
}

/**
 * XML相关处理对象
 */
export interface PropertyExport {
    xml?: XmlMeta | XmlMetaFactory;
}

/**
 * XML元数据
 */
export interface XmlMeta {
    /** element 名称 */
    element?: string;

    /** element 命名空间 */
    namespace?: string;

    /** element 类型 */
    kind?: "empty" | "text" | "cdata" | "raw";

    /** element 自身 attribute */
    elementAttrs?: Record<string, string>;

    /** 子节点（递归） */
    children?: XmlMeta[];

    /** 作为 attribute 输出（顶层） */
    attr?: string;
}

/**
 * XML元数据工厂
 */
export type XmlMetaFactory = (value: any, node: any) => XmlMeta | null | undefined;

export type Property = PropertyBase & PropertyForm & PropertyUI & PropertyValidation & PropertyExport;
