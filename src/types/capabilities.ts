import { PropertyBase } from "./property";

/**
 * 属性功能
 */
export interface PropertiesCap {
    /**
     * 获取节点属性,这个方法必须存在
     */
    getNodeProperties(): PropertyBase[];
}
