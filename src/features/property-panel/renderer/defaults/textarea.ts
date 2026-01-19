import { h } from "vue";
import { ElInput } from "element-plus";
import { registerPropertyRenderer } from "../property-renderer.registry";

/**
 * 注册textarea类型的渲染器
 */
export function registerTextareaRenderer() {
    registerPropertyRenderer("textarea", ({ value, onChange, property }) => {
        return () => {
            const disabled = Boolean(property.ui?.disabled);
            return h(ElInput, {
                modelValue: value,
                "onUpdate:modelValue": onChange,
                clearable: true,
                disabled,
                type: "textarea",
                rows: 3,
                placeholder: `请输入${property.label}`,
                ...property.ui?.props
            });
        };
    });
}
