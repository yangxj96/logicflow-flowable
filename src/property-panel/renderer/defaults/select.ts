import { h } from "vue";
import { registerPropertyRenderer } from "../property-renderer.registry";
import { ElOption, ElSelect } from "element-plus";

/**
 * 注册select类型的渲染器
 */
export function registerSelectRenderer() {
    registerPropertyRenderer("select", ({ value, onChange, property, emit }) => {
        const disabled = Boolean(property.ui?.disabled);

        const options = (property.ui?.options || []).map(opt =>
            h(ElOption, {
                label: opt.label,
                value: opt.value,
                key: opt.value
            })
        );

        return h(
            ElSelect,
            {
                modelValue: value,
                "onUpdate:modelValue": (val: any) => {
                    onChange(val);
                    emit?.("selectChange", {
                        key: property.key,
                        value: val
                    });
                },
                disabled,
                style: { width: "100%" },
                placeholder: `请选择${property.label}`,
                ...property.ui?.props
            },
            options // 👈 直接 children，而不是 slot
        );
    });
}
