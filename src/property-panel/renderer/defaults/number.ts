import { h } from "vue";
import { ElInputNumber } from "element-plus";
import { registerPropertyRenderer } from "../property-renderer.registry";

/**
 * 注册number类型的渲染器
 */
export function registerNumberRenderer() {
    registerPropertyRenderer("number", ({ value, onChange, property }) => {
            const disabled = Boolean(property.ui?.disabled);
            return h(ElInputNumber, {
                modelValue: value,
                "onUpdate:modelValue": onChange,
                controlsPosition: "right",
                disabled,
                ...property.ui?.props
            });
        }
    );
}
