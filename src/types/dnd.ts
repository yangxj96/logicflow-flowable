import type { LogicFlow } from "@logicflow/core";

/**
 * 初始化数据
 */
export interface DndPanelOptions {
    lf: LogicFlow;
    container: HTMLElement;
}

/**
 * 节点元数据定义
 */
export interface DndNodeMeta {
    type: string;
    label: string;
    icon: string;
    group: string;
}

