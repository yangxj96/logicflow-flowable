import type LogicFlow from "@logicflow/core";
import { DndNodeMeta } from "../../types";

/**
 * DND面板状态
 */
export const dndPanelState = {
    lf: null as LogicFlow | null,
    nodes: [] as DndNodeMeta[],
    visible: true
};

/**
 * 初始化状态
 * @param lf LogicFlow实例
 * @param nodes 节点列表
 */
export function initDndPanel(lf: LogicFlow, nodes: DndNodeMeta[]) {
    dndPanelState.lf = lf;
    dndPanelState.nodes = nodes;
}
