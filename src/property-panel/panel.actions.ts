import { PanelState, Property } from "../types";
import LogicFlow from "@logicflow/core";

/**
 * 验证当前节点
 * @param state 状态
 */
export async function validateCurrentNode(state: PanelState) {
    if (!state.formRef.value) return true;
    try {
        await state.formRef.value.validate();
        return true;
    } catch {
        return false;
    }
}

/**
 * 初始化节点属性
 * @param state 状态
 */
export function initNodeProperties(state: PanelState) {
    const node = state.currentNode.value;
    if (!node) return;

    const props = (node.properties ||= {});
    state.properties.value.forEach((p: Property) => {
        if (props[p.key] === undefined) {
            props[p.key] = p.defaultValue ?? "";
        }
    });
}

/**
 * 属性分组
 *
 * @param state 状态
 */
export function groupProperties(state: PanelState) {
    state.grouping.value = state.properties.value.reduce<Record<string, Property[]>>((acc, p) => {
        const group = p.group || "基础信息";
        acc[group] = acc[group] || [];
        acc[group].push(p);
        return acc;
    }, {});
}

/**
 * 提交节点更新
 * @param state 状态
 */
export function commitNodeUpdate(state: PanelState) {
    const node = state.currentNode.value;
    if (!node) return;

    state.lf.setProperties(node.id, node.properties as LogicFlow.PropertiesType);

    const name = node.properties?.name;
    if (typeof name === "string") {
        state.lf.updateText(node.id, name);
    }
}
