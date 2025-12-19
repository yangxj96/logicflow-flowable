import { h } from "vue";
import { ElInput } from "element-plus";
import { registerPropertyRenderer } from "../property-renderer.registry";

/**
 * 注册string类型的渲染器
 */
export function registerStringRenderer() {
    registerPropertyRenderer("string", ({ value, onChange, property }) =>
        h(ElInput, {
            modelValue: value,
            "onUpdate:modelValue": onChange,
            clearable: true,
            placeholder: `请输入${property.label}`,
            ...property.ui?.props
        })
    );
}
