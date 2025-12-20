import { h } from "vue";
import { ElDivider, ElForm, ElFormItem, ElInput } from "element-plus";

/**
 * 流程属性面板
 * @param state 状态
 */
export function renderProcessPanel(state: any) {
    const model = state.processModel.value;

    return h("div", { style: { padding: "10px" } }, [
        h("div", { style: { fontSize: "16px", fontWeight: "600" } }, "流程定义"),
        h(ElDivider),

        h(
            ElForm,
            {
                ref: state.formRef,
                model,
                labelPosition: "top"
            },
            () => [
                h(ElFormItem, { label: "流程 ID" }, () =>
                    h(ElInput, {
                        modelValue: model.id,
                        disabled: true
                    })
                ),

                h(ElFormItem, { label: "流程名称" }, () =>
                    h(ElInput, {
                        modelValue: model.name,
                        "onUpdate:modelValue": (v: string) => (model.name = v)
                    })
                ),

                h(ElFormItem, { label: "是否可执行" }, () =>
                    h(ElInput, {
                        modelValue: String(model.isExecutable),
                        "onUpdate:modelValue": (v: string) => (model.isExecutable = v === "true")
                    })
                )
            ]
        )
    ]);
}
