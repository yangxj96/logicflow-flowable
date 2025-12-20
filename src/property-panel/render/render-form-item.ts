import { h } from "vue";
import { ElFormItem } from "element-plus";
import { commitNodeUpdate } from "../panel.actions";
import { getPropertyRenderer } from "../renderer/property-renderer.registry";

/**
 * 最小渲染单元
 * @param state 状态
 * @param property 属性
 */
export function renderFormItem(state: any, property: any) {
    const value = state.currentNode.value?.properties?.[property.key];

    const renderer = getPropertyRenderer(property.type);
    if (!renderer) {
        return h("div", `未注册的属性类型: ${property.type}`);
    }

    const vnode = renderer({
        property,
        value,
        onChange: v => {
            state.currentNode.value.properties[property.key] = v;
            commitNodeUpdate(state);
        },
        emit: (event, payload) => {
            state.lf.emit(`property:${event}`, {
                property,
                payload,
                node: state.currentNode.value
            });
        }
    });

    return h(ElFormItem, { label: property.label, prop: property.key }, () => vnode);
}
