import type LogicFlow from "@logicflow/core";
import { defineComponent } from "vue";
import { usePanelState } from "./panel.state";
import { bindPanelEvents } from "./panel.events";
import { renderNodePanel } from "./render/render-node";
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
            const state = usePanelState(lf);

            bindPanelEvents(lf, state);

            return () =>
                state.selectedType.value === "node"
                    ? renderNodePanel(state)
                    : renderProcessPanel(state);
        }
    });
}
