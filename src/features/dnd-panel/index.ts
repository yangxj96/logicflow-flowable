import { DndNodeMeta, DndPanelOptions } from "../../types";
import { createApp } from "vue";
import { DndPanelUi } from "./dnd-panel.ui";
import { initDndPanel } from "./dnd-panel.state";
import { NODE_TYPES } from "../../core/constants";

let mounted = false;

export function registerDndPanel({ lf, container }: DndPanelOptions) {
    // 只 mount 一次（非常重要）
    if (!mounted) {

        initDndPanel(lf, DEFAULT_DND_ITEMS);

        createApp(DndPanelUi).mount(container);
        mounted = true;
    }
}

export const DEFAULT_DND_ITEMS = [
    {
        type: NODE_TYPES.START_EVENT,
        label: "开始事件",
        icon: "VideoPlay",
        group: "事件"
    },
    {
        type: NODE_TYPES.END_EVENT,
        label: "结束事件",
        icon: "CircleClose",
        group: "事件"
    },
    {
        type: NODE_TYPES.USER_TASK,
        label: "用户任务",
        icon: "User",
        group: "任务"
    },
    {
        type: NODE_TYPES.EXCLUSIVE_GATEWAY,
        label: "排他网关",
        icon: "Share",
        group: "网关"
    }
] as DndNodeMeta[];
