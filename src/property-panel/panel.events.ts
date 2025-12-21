import { NodeTypeToProperties } from "../properties";
import { groupProperties, initNodeProperties, validateCurrentNode } from "./panel.actions";
import { App } from "vue";
import { NodeType, PanelState } from "../types";
import LogicFlow from "@logicflow/core";

/**
 * LogicFlow 事件层
 *
 * @example
 * 职责
 * - 监听 LogicFlow 事件
 * - 切换状态
 * - 调用 actions
 * 只放
 * - lf.on("node:click")
 * - lf.on("blank:click")
 * - node:delete / edge:click
 * 不允许
 * - 写 UI
 * - 写 h()
 * - 直接改 DOM
 *
 * @param lf {@link LogicFlow}实例
 * @param state 状态
 * @param app vue实例
 */
export function bindPanelEvents(lf: LogicFlow, state: PanelState, app: App) {
    // 节点点击
    lf.on("node:click", async (args) => selectNode(args.data, lf, state, app));

    // 线点击
    lf.on("edge:click", async (args) => selectEdge(args.data, lf, state, app));

    // 画布点击
    lf.on("blank:click", () => selectProcess(state, app));
}

/**
 * 节点校验
 * @param state 状态
 */
async function beforeSelect(state: PanelState) {
    return await validateCurrentNode(state);
}

/**
 * 节点被选中
 * @param data 数据
 * @param lf {@link LogicFlow} 实例
 * @param state 状态
 * @param app VUE实例
 */
async function selectNode(data: LogicFlow.NodeData, lf: LogicFlow, state: PanelState, app: App) {
    await app.runWithContext(async () => {
        if (!(await beforeSelect(state))) return;

        // 清除线选中
        lf.clearSelectElements();

        state.selectedType.value = "node";
        state.currentNode.value = data;
        state.properties.value = NodeTypeToProperties[data.type as NodeType] ?? [];

        initNodeProperties(state);
        groupProperties(state);
    });
}

/**
 * 线被选中
 * @param data 数据
 * @param lf {@link LogicFlow} 实例
 * @param state 状态
 * @param app VUE实例
 */
async function selectEdge(data: LogicFlow.EdgeData, lf: LogicFlow, state: PanelState, app: App) {
    await app.runWithContext(async () => {
        if (!(await beforeSelect(state))) return;

        // 清除节点选中
        lf.clearSelectElements();

        state.selectedType.value = "edge";
        state.currentNode.value = data;
        state.properties.value = NodeTypeToProperties[data.type as NodeType] ?? [];

        initNodeProperties(state);
        groupProperties(state);
    });
}

/**
 * 画布被选中
 * @param state 状态
 * @param app VUE实例
 */
function selectProcess(state: PanelState, app: App) {
    app.runWithContext(() => {
        state.selectedType.value = "process";
        state.currentNode.value = null;
    });
}
