import { NodeTypeToProperties } from "../properties";
import { groupProperties, initNodeProperties, validateCurrentNode } from "./panel.actions";
import { App } from "vue";

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
    lf.on("node:click", async ({ data }: any) => {
        await app.runWithContext(async () => {
            const ok = await validateCurrentNode(state);
            if (!ok) return;

            state.selectedType.value = "node";
            state.currentNode.value = data;
            state.properties.value = NodeTypeToProperties[data.type] || [];

            initNodeProperties(state);
            groupProperties(state);
        });
    });

    lf.on("blank:click", () => {
        app.runWithContext(() => {
            state.selectedType.value = "process";
            state.currentNode.value = null;
        });
    });
}
