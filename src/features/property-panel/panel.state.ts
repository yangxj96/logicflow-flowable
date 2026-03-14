// import type LogicFlow from "@logicflow/core";
// import { computed, ref } from "vue";
// import type { FormInstance } from "element-plus";
// import { getProcessContext } from "../context/process";
// import { buildElFormRules } from "../validation/ui/element-plus";
// import type { PanelState, Property } from "../../../types";
//
// /**
//  * 唯一状态源
//  *
//  * @param lf {@link LogicFlow}实例
//  */
// export function usePanelState(lf: LogicFlow): PanelState {
//     // 节点类型
//     const selectedType = ref<"node" | "edge" | "process">("process");
//     // 当前节点
//     const currentNode = ref<LogicFlow.NodeData | LogicFlow.EdgeData | null>(null);
//     // 相关属性
//     const properties = ref<Property[]>([]);
//     // 进行分组
//     const grouping = ref<Record<string, Property[]>>({});
//     // 流程模型
//     const processModel = ref(getProcessContext(lf));
//     // 表单
//     const formRef = ref<FormInstance>();
//     // 路由
//     const formRules = computed(() => {
//         if (!currentNode.value) return {};
//         return buildElFormRules(properties.value, {
//             nodeType: currentNode.value.type,
//             allValues: currentNode.value.properties
//         });
//     });
//
//     return {
//         lf,
//         selectedType,
//         currentNode,
//         properties,
//         grouping,
//         processModel,
//         formRef,
//         formRules
//     };
// }
