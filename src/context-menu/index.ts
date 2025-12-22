import type LogicFlow from "@logicflow/core";
import { edgeMenu, nodeMenu } from "./menu.event";
import { openContextMenu } from "./menu.state";
import { createApp } from "vue";
import Menu from "./menu.vue";

let mounted = false;

/**
 * 注册上下文菜单
 * @param lf
 */
export function registerContextMenu(lf: LogicFlow) {
    // 只 mount 一次（非常重要）
    if (!mounted) {
        mountContextMenu();
        mounted = true;
    }

    // 注册节点右键
    lf.on("node:contextmenu", ({ e, data }) => {
        e.preventDefault();
        openContextMenu(e, nodeMenu, { lf, type: "node", data });
    });

    // 注册线右键
    lf.on("edge:contextmenu", ({ e, data }) => {
        e.preventDefault();
        openContextMenu(e, edgeMenu, { lf, type: "edge", data });
    });
}

/**
 * 挂在上下文菜单
 */
export function mountContextMenu() {
    const el = document.createElement("div");
    document.body.appendChild(el);

    createApp(Menu).mount(el);
}
