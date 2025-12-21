/**
 * UI控制
 */
export interface UIContext {
    /** 当前属性定义 */
    property: BaseProperty;

    /** 当前值 */
    value: any;

    /** 表单目标（node / process） */
    target: any;

    /** 上下文类型 */
    type: "node" | "process";

    /** LogicFlow 实例（可选） */
    lf?: any;
}

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
    /** 是否禁用（支持动态） */
    disabled?: boolean | ((ctx: UIContext) => boolean);
}

export type XmlElementKind = "empty" | "text" | "cdata" | "raw";

export interface XmlMeta {
    /** element 名称 */
    element?: string;

    /** element 命名空间 */
    namespace?: string;

    /** element 类型 */
    kind?: XmlElementKind;

    /** element 自身 attribute */
    elementAttrs?: Record<string, string>;

    /** 子节点（递归） */
    children?: XmlMeta[];

    /** 作为 attribute 输出（顶层） */
    attr?: string;
}

export type XmlMetaFactory = (value: any, node: any) => XmlMeta | null | undefined;

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
    type: "string" | "textarea" | "number" | "boolean" | "select";
    defaultValue?: any;
    group: string;
    xml?: XmlMeta | XmlMetaFactory;
    ui?: UI;
    validate?: Validate;
}
