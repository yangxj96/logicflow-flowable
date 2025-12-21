import type { LogicFlow } from "@logicflow/core";
import type { ComputedRef, Ref } from "vue";
import type { Property } from "./property";
import type { FormInstance } from "element-plus";
import type { ProcessModel } from "./node";

/**
 * 面板参数
 *
 */
export interface PanelOptions {
    container: HTMLElement;
    lf: LogicFlow;
}

/**
 * 面板状态
 */
export interface PanelState {
    /** {@link LogicFlow} 实例 */
    lf: LogicFlow;
    /** 当前节点类型,默认是process */
    selectedType: Ref<"node" | "edge" | "process">;
    /** 当前节点 */
    currentNode: Ref<LogicFlow.NodeData | LogicFlow.EdgeData | null>;
    /** 相关属性 */
    properties: Ref<Property[]>;
    /** 分组属性 */
    grouping: Ref<Record<string, Property[]>>;
    /** 流程模型 */
    processModel: Ref<ProcessModel>;
    /** 表单 */
    formRef: Ref<FormInstance | undefined>;
    /** 验证规则 */
    formRules: ComputedRef<Record<string, any>>;
}
