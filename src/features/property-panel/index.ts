import { App, createApp } from "vue";
import { createPropertyPanel } from "./panel.component";
import type { PanelOptions } from "../../types";

const appMap = new WeakMap<HTMLElement, App>();

/**
 * 注册入口
 * @param container 挂在的容器
 * @param lf {@link LogicFlow}实例
 */
export function registerPropertyPanel({ container, lf }: PanelOptions) {
    if (!container) return;

    if (appMap.has(container)) {
        return;
    }

    const app = createApp(createPropertyPanel(lf));
    app.mount(container);
    appMap.set(container, app);
}
