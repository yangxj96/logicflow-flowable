import { h } from "vue";
import { ElFormItem, ElInput } from "element-plus";
import { commitNodeUpdate } from "../panel.actions";

/**
 * 最小渲染单元
 * @param state 状态
 * @param property 属性
 */
export function renderFormItem(state: any, property: any) {
    const value = state.currentNode.value?.properties?.[property.key] ?? "";

    const update = (val: any) => {
        state.currentNode.value.properties[property.key] = val;
        commitNodeUpdate(state);
    };

    return h(
        ElFormItem,
        { label: property.label, prop: property.key },
        () =>
            h(ElInput, {
                modelValue: value,
                "onUpdate:modelValue": update,
                disabled: property.key === "id"
            })
    );
}
