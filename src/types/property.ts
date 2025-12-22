/**
 * 基础属性对象
 */
export interface PropertyBase {
    key: string;
    // 标签
    label: string;
    // 分组
    group: string;
    defaultValue?: any;
    type: "string" | "textarea" | "number" | "boolean" | "select";
}

/**
 * XML相关处理对象
 */
export interface PropertyXMLExport {
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

/**
 * UI对象导出
 */
export interface PropertyUIExport {
    ui?: PropertyUI;
}

/**
 * UI相关配置
 */
export interface PropertyUI {
    disabled?: boolean;
    props?: Record<string, any>;
    rules?: {
        // 是否必填
        required?: boolean;
        // 验证规则KEY
        ruleKey?: string;
    };
    // select类型专用的
    options?: Array<{ label: string; value: string }>;
}

export type Property = PropertyBase & PropertyUIExport & PropertyXMLExport;
