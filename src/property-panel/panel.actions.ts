// 行为 & 业务逻辑

/**
 * 验证当前节点
 * @param state 状态
 */
export async function validateCurrentNode(state: any) {
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
export function initNodeProperties(state: any) {
    const node = state.currentNode.value;
    if (!node) return;

    const props = (node.properties ||= {});
    state.properties.value.forEach((p: any) => {
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
export function groupProperties(state: any) {
    state.groupedProperties.value = state.properties.value.reduce(
        (acc: any, p: any) => {
            const group = p.group || "基础信息";
            (acc[group] ||= []).push(p);
            return acc;
        },
        {}
    );
}

/**
 * 提交节点更新
 * @param state 状态
 */
export function commitNodeUpdate(state: any) {
    const node = state.currentNode.value;
    if (!node) return;

    state.lf.setProperties(node.id, node.properties);

    const name = node.properties?.name;
    if (typeof name === "string") {
        state.lf.updateText(node.id, name);
    }
}
