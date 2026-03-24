import { PropertyEventOptions } from "./types";

/**
 * 注册属性面板相关事件
 */
export function registerPropertyEvents(options: PropertyEventOptions) {
    const { lf, app, state } = options;

    // ===== 节点点击 =====
    lf.on("node:click", ({ data }) => {
        console.log(data);
        run(() => {
            state.mode.value = "node";
            state.currentNode.value = data;
            state.currentEdge.value = undefined;
        });
    });

    // ===== 边点击 =====
    lf.on("edge:click", ({ data }) => {
        run(() => {
            state.mode.value = "edge";
            state.currentNode.value = undefined;
            state.currentEdge.value = data;
        });
    });

    // ===== 画布点击 =====
    lf.on("blank:click", () => {
        run(() => {
            state.mode.value = "process";
            state.currentNode.value = undefined;
            state.currentEdge.value = undefined;
        });
    });

    // ===== 新增节点（DND / add）=====
    const handleNodeAdd = ({ data }: any) => {
        lf.selectElementById(data.id);

        run(() => {
            state.mode.value = "node";
            state.currentNode.value = data;
            state.currentEdge.value = undefined;
        });
    };

    lf.on("node:add", handleNodeAdd);
    lf.on("node:dnd-add", handleNodeAdd);

    // ===== 新增边 =====
    lf.on("edge:add", ({ data }) => {
        lf.selectElementById(data.id);

        run(() => {
            state.mode.value = "edge";
            state.currentNode.value = undefined;
            state.currentEdge.value = data;
        });
    });

    // ===== 可选：删除时重置 =====
    lf.on("node:delete", resetIfMatch);
    lf.on("edge:delete", resetIfMatch);

    // ===== 重置匹配 =====
    function resetIfMatch({ data }: any) {
        run(() => {
            if (state.currentNode.value?.id === data.id) {
                reset();
            }
            if (state.currentEdge.value?.id === data.id) {
                reset();
            }
        });
    }

    // ===== 状态重置 =====
    function reset() {
        state.mode.value = "process";
        state.currentNode.value = undefined;
        state.currentEdge.value = undefined;
    }

    // ===== Vue 上下文执行 =====
    function run(fn: () => void) {
        app?.runWithContext ? app.runWithContext(fn) : fn();
    }
}
