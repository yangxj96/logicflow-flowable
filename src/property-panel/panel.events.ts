import { NodeTypeToProperties } from "../properties";
import { groupProperties, initNodeProperties, validateCurrentNode } from "./panel.actions";
import { App } from "vue";
import { NodeType } from "../types";
import { NODE_TYPES } from "../core/constants";

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
export function bindPanelEvents(lf: any, state: any, app: App) {
    // 节点点击
    lf.on("node:click", async ({ data }: { data: unknown }) => {
        await app.runWithContext(() => selectNode(data, lf, state));
    });

    // 线点击
    lf.on("edge:click", async ({ data }: { data: unknown }) => {
        await app.runWithContext(() => selectEdge(data, lf, state));
    });

    // 画布点击
    lf.on("blank:click", () => {
        app.runWithContext(() => {
            state.selectedType.value = "process";
            state.currentNode.value = null;
        });
    });
}

function isNodeType(type: unknown): type is NodeType {
    return Object.values(NODE_TYPES).includes(type as NodeType);
}

// 节点校验
async function beforeSelect(state: any) {
    return await validateCurrentNode(state);
}

// 节点被选中
async function selectNode(data: unknown, lf: any, state: any) {
    if (!(await beforeSelect(state))) return;

    // 🔑 关键：清除线选中
    lf.clearSelectElements();

    state.selectedType.value = "node";
    state.currentNode.value = data;

    if (typeof data === "object" && data !== null && "type" in data && isNodeType((data as any).type)) {
        const type = (data as { type: NodeType }).type;
        state.properties.value = NodeTypeToProperties[type] ?? [];
    } else {
        state.properties.value = [];
    }

    lf.selectElementById((data as any).id);

    initNodeProperties(state);
    groupProperties(state);
}

async function selectEdge(data: unknown, lf: any, state: any) {
    if (!(await beforeSelect(state))) return;

    // 清除节点选中
    lf.clearSelectElements();

    console.log(data);
    state.selectedType.value = "edge";
    state.currentNode.value = data;
    if (typeof data === "object" && data !== null && "type" in data && isNodeType((data as any).type)) {
        const type = (data as { type: NodeType }).type;
        console.log(type);
        state.properties.value = NodeTypeToProperties[type] ?? [];
        console.log(state.properties.value);
    } else {
        state.properties.value = [];
    }

    // lf.selectEdgeById((data as any).id);

    initNodeProperties(state);
    groupProperties(state);
}
