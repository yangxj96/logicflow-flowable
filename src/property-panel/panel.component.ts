import type LogicFlow from "@logicflow/core";
import { defineComponent, getCurrentInstance } from "vue";
import { usePanelState } from "./panel.state";
import { bindPanelEvents } from "./panel.events";
import { renderNodePanel } from "./render/render-node";
import { renderEdgePanel } from "./render/render-edge";
import { renderProcessPanel } from "./render/render-process";

/**
 *
 * 组件骨架
 *
 * @example
 * 职责
 * - 创建 Vue 组件
 * - 组织 state / events / render
 * - 决定「渲染节点面板还是流程面板」
 * 只做三件事
 * - 调用 usePanelState
 * - 调用 bindPanelEvents
 * - return () => xxxPanel(state)
 * 禁止
 * - 写业务逻辑
 * - 写 Element Plus 组件
 * - 写 LogicFlow API
 *
 * @param lf {@link LogicFlow}实例
 */
export function createPropertyPanel(lf: LogicFlow) {
    return defineComponent({
        name: "LogicFlowPropertyPanel",
        setup() {
            const instance = getCurrentInstance();
            const app = instance!.appContext.app;

            const state = usePanelState(lf);

            bindPanelEvents(lf, state, app);

            return () => {
                const type = state.selectedType.value;
                if (type === "node") {
                    return renderNodePanel(state);
                } else if (type === "edge") {
                    return renderEdgePanel(state);
                } else {
                    return renderProcessPanel(state);
                }
            };
        }
    });
}
