import { createApp } from "vue";
import { createPropertyPanel } from "./panel.component";
import type { PanelOptions } from "../../types";

/**
 * 注册入口
 * @example
 * 职责
 * - 这是给外部用的 API
 * - 接收 { container, lf }
 * - 挂载 Vue 组件
 * 只允许
 * - createApp
 * - mount
 * - 调用 createPropertyPanel
 * 禁止
 * - ref / computed
 * - lf.on
 * - h()
 * 存在意义:
 * 外部调用点必须简单稳定，内部怎么变都不影响使用方。
 *
 * @param container 挂在的容器
 * @param lf {@link LogicFlow}实例
 */
export function registerPropertyPanel({ container, lf }: PanelOptions) {
    const panel = createPropertyPanel(lf);
    const app = createApp(panel);
    app.mount(container);
}
