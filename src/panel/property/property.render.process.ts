import { PropertyPanelState } from "./types";
import { h } from "vue";
import { ElCard, ElForm, ElFormItem, ElInput, ElSwitch, ElText } from "element-plus";
import { renderErrorCard } from "./property.render.common";

export function renderProcessPanel(state: PropertyPanelState) {
    if (!state.process.value) {
        return renderErrorCard("流程定义", "流程加载异常");
    }
    // 正常渲染
    return h(
        ElCard,
        {
            shadow: "never",
            style: {
                width: "100%",
                height: "100%",
                border: "none"
            }
        },
        {
            header: () =>
                h(
                    "span",
                    {
                        style: {
                            fontWeight: 600
                        }
                    },
                    "流程定义"
                ),
            default: () =>
                h(
                    ElForm,
                    {
                        ref: state.formRef,
                        model: state.process,
                        labelPosition: "top"
                    },
                    () => [
                        h(
                            ElFormItem,
                            {
                                label: "流程ID"
                            },
                            () =>
                                h(
                                    ElText,
                                    {
                                        type: "primary"
                                    },
                                    () => state.process.value.id
                                )
                        ),
                        h(
                            ElFormItem,
                            {
                                label: "流程名称"
                            },
                            () =>
                                h(ElInput, {
                                    modelValue: state.process.value.name,
                                    "onUpdate:modelValue": (v: string) => (state.process.value.name = v)
                                })
                        ),
                        h(
                            ElFormItem,
                            {
                                label: "流程分类"
                            },
                            () =>
                                h(ElInput, {
                                    modelValue: state.process.value.category,
                                    "onUpdate:modelValue": (v: string) => (state.process.value.category = v)
                                })
                        ),
                        h(
                            ElFormItem,
                            {
                                label: "自动执行"
                            },
                            () =>
                                h(ElSwitch, {
                                    modelValue: state.process.value.isExecutable,
                                    "onUpdate:modelValue": v => (state.process.value.isExecutable = v as boolean)
                                })
                        ),
                        h(
                            ElFormItem,
                            {
                                label: "说明"
                            },
                            () =>
                                h(ElInput, {
                                    modelValue: state.process.value.documentation,
                                    "onUpdate:modelValue": (v: string) => (state.process.value.documentation = v)
                                })
                        )
                    ]
                )
        }
    );
}
