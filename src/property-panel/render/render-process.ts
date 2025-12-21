import { h } from "vue";
import { ElDivider, ElForm } from "element-plus";
import { ProcessProperties } from "../../properties/process/process";
import { renderFormItem } from "./render-form-item";
import { PanelState } from "../../types";

/**
 * 流程属性面板
 * @param state 状态
 */
export function renderProcessPanel(state: PanelState) {
    const model = state.processModel.value;

    if (!model) {
        return h("div", { style: { padding: "10px" } }, "未加载流程定义");
    }

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
            () =>
                ProcessProperties.map(prop =>
                    renderFormItem(state, prop, {
                        type: "process",
                        target: state.processModel.value,
                        onCommit: () => {
                            // 可选：流程级更新 / 校验 / emit
                        }
                    })
                )
        )
    ]);
}
