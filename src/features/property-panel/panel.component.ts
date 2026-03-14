// import type LogicFlow from "@logicflow/core";
// import { defineComponent, getCurrentInstance } from "vue";
// import { usePanelState } from "./panel.state";
// import { bindPanelEvents } from "./panel.events";
//
// /**
//  *
//  * 组件骨架
//  *
//  * @param lf {@link LogicFlow}实例
//  */
// export function createPropertyPanel(lf: LogicFlow) {
//     return defineComponent({
//         name: "LogicFlowPropertyPanel",
//         setup() {
//             const instance = getCurrentInstance();
//             const app = instance!.appContext.app;
//
//             const state = usePanelState(lf);
//
//             bindPanelEvents(lf, state, app);
//
//             return () => {
//                 const type = state.selectedType.value;
//                 if (type === "node") {
//                     return renderNodePanel(state);
//                 } else if (type === "edge") {
//                     return renderEdgePanel(state);
//                 } else {
//                     return renderProcessPanel(state);
//                 }
//             };
//         }
//     });
// }
