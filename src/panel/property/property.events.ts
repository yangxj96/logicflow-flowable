import LogicFlow from "@logicflow/core";
import { App } from "vue";
import { PropertyEventOptions, PropertyPanelState } from "./types";

/**
 * 注册属性面板相关事件
 */
export function registerPropertyEvents(options: PropertyEventOptions) {
    const { lf, app, state } = options;

    const events = ["node:click", "edge:click", "blank:click"];

    events.forEach(event => {
        lf.on(event, () => {
            updateSelection(lf, app, state);
        });
    });

    lf.on("node:add", ({ data }) => {
        lf.selectElementById(data.id);
        updateSelection(lf, app, state);
    });

    lf.on("node:dnd-add", ({ data }) => {
        lf.selectElementById(data.id);
        updateSelection(lf, app, state);
    });

    lf.on("edge:add", ({ data }) => {
        lf.selectElementById(data.id);
        updateSelection(lf, app, state);
    });
}

function updateSelection(lf: LogicFlow, app: App, state: PropertyPanelState) {
    const { nodes, edges } = lf.getSelectElements();

    console.log(nodes);
    console.log(edges);

    app?.runWithContext(() => {
        if (nodes.length) {
            state.mode.value = "node";
            state.currentNode.value = nodes[0];
            state.currentEdge.value = undefined;
            return;
        }

        if (edges.length) {
            state.mode.value = "edge";
            state.currentNode.value = undefined;
            state.currentEdge.value = edges[0];
            return;
        }

        state.mode.value = "process";
        state.currentNode.value = undefined;
        state.currentEdge.value = undefined;
    });
}
