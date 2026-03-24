/**
 * 属性
 */
export interface Property {
    /**
     * 字段
     */
    field: string;
    /**
     * 默认值
     */
    default: string;
    /**
     * 显示名称
     */
    label: string;
    /**
     * 属性类型,行内或者是子节点
     */
    type: "inline" | "children";
    /**
     * 组件类型
     */
    component: "string" | "textarea" | "number" | "boolean";
}

/**
 * 属性必备方法
 */
export interface PropertyMethod {
    /**
     * 获取属性列表
     */
    getSchemas(): Property[];
}
