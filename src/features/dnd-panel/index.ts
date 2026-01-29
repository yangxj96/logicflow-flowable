import { DndNodeMeta, DndPanelOptions } from "../../types";
import { App, createApp } from "vue";
import { createDndPanel } from "./dnd-panel.ui";
import { NODE_ICONS, NODE_TYPES } from "../../core/constants";


const appMap = new WeakMap<HTMLElement, App>();

export function registerDndPanel({ lf, container }: DndPanelOptions) {
    if (!container) return;

    if (appMap.has(container)) {
        return;
    }

    const app = createApp(createDndPanel(lf));
    app.mount(container);

    appMap.set(container, app);
}

export const DEFAULT_DND_ITEMS = [
    {
        type: NODE_TYPES.START_EVENT,
        label: "开始事件",
        icon: NODE_ICONS.START_EVENT,
        group: "事件"
    },
    {
        type: NODE_TYPES.END_EVENT,
        label: "结束事件",
        icon: NODE_ICONS.END_EVENT,
        group: "事件"
    },
    {
        type: NODE_TYPES.EXCLUSIVE_GATEWAY,
        label: "排他网关",
        icon: NODE_ICONS.EXCLUSIVE_GATEWAY,
        group: "网关"
    },
    {
        type: NODE_TYPES.INCLUSIVE_GATEWAY,
        label: "包容网关",
        icon: NODE_ICONS.INCLUSIVE_GATEWAY,
        group: "网关"
    },
    {
        type: NODE_TYPES.PARALLEL_GATEWAY,
        label: "并行网关",
        icon: NODE_ICONS.PARALLEL_GATEWAY,
        group: "网关"
    },
    {
        type: NODE_TYPES.RECEIVE_TASK,
        label: "接收任务",
        icon: NODE_ICONS.RECEIVE_TASK,
        group: "任务"
    },
    {
        type: NODE_TYPES.SCRIPT_TASK,
        label: "脚本任务",
        icon: NODE_ICONS.SCRIPT_TASK,
        group: "任务"
    },
    {
        type: NODE_TYPES.SERVICE_TASK,
        label: "服务任务",
        icon: NODE_ICONS.SERVICE_TASK,
        group: "任务"
    },
    {
        type: NODE_TYPES.USER_TASK,
        label: "用户任务",
        icon: NODE_ICONS.USER_TASK,
        group: "任务"
    }
] as DndNodeMeta[];
