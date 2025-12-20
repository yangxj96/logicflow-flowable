import type LogicFlow from "@logicflow/core";
import { computed, ref } from "vue";
import type { FormInstance } from "element-plus";
import { getProcessContext } from "../context/process";
import { buildElFormRules } from "../validation/ui/element-plus";
import type { BaseProperty } from "../types";

/**
 * 唯一状态源
 *
 * @example
 * 职责
 * - 所有 ref / computed 都在这里
 * - 所有状态只在这里创建一次
 * - 对外暴露 state 对象
 * 包含的内容
 * - selectedType
 * - currentNode
 * - properties
 * - groupedProperties
 * - processModel
 * - formRef
 * - elFormRules (computed)
 * 禁止
 * - lf.on
 * - h()
 * - 修改节点
 * @param lf {@link LogicFlow}实例
 */
export function usePanelState(lf: LogicFlow) {
    const selectedType = ref<"node" | "edge" | "process">("process");
    const currentNode = ref<LogicFlow.NodeData | null>(null);
    const properties = ref<BaseProperty[]>([]);
    const groupedProperties = ref<Record<string, BaseProperty[]>>({});
    const processModel = ref(getProcessContext(lf));
    const formRef = ref<FormInstance>();

    const elFormRules = computed(() => {
        if (!currentNode.value) return {};
        return buildElFormRules(properties.value, {
            nodeType: currentNode.value.type,
            allValues: currentNode.value.properties
        });
    });

    return {
        lf,
        selectedType,
        currentNode,
        properties,
        groupedProperties,
        processModel,
        formRef,
        elFormRules
    };
}
