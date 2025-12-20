import { h } from "vue";
import { ElOption, ElSelect } from "element-plus";
import { registerPropertyRenderer } from "../property-renderer.registry";

/**
 * 注册select类型的渲染器
 */
export function registerSelectRenderer() {
    registerPropertyRenderer("select", ({ value, onChange, property, emit }) => {
            const disabled = Boolean(property.ui?.disabled);
            return h(
                ElSelect,
                {
                    modelValue: value,
                    "onUpdate:modelValue": (val: any) => {
                        // 正常更新属性
                        onChange(val);

                        // 向外发事件（重点）
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
                {
                    default: () =>
                        (property.ui?.options || []).map(opt =>
                            h(ElOption, {
                                label: opt.label,
                                value: opt.value,
                                key: opt.value
                            })
                        )
                }
            );
        }
    );
}
