import { h } from "vue";
import { ElSwitch } from "element-plus";
import { registerPropertyRenderer } from "../property-renderer.registry";

/**
 * 注册boolean类型的渲染器
 */
export function registerBooleanRenderer() {
    registerPropertyRenderer("boolean", ({ value, onChange, property }) => {
        return () => {
            const disabled = Boolean(property.ui?.disabled);
            return h(ElSwitch, {
                modelValue: value,
                "onUpdate:modelValue": onChange,
                disabled,
                ...property.ui?.props
            });
        };
    });
}
