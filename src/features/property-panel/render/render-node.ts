import { h } from "vue";
import { ElCollapse, ElCollapseItem, ElForm } from "element-plus";
import { renderFormItem } from "./render-form-item";
import { commitNodeUpdate } from "../panel.actions";
import { NodeType, PanelState } from "../../../types";
import { NodeTypeToName } from "../../properties";

/**
 * 节点属性面板
 * @param state 状态
 */
export function renderNodePanel(state: PanelState) {
    const node = state.currentNode.value;

    if (!node) {
        return h("div", { style: { padding: "10px" } }, "请选择一个节点");
    }

    const collapseItems = Object.entries(state.grouping.value).map(([group, props]) =>
        h(ElCollapseItem, { title: group, name: group }, () =>
            props.map(p =>
                renderFormItem(state, p, {
                    type: "node",
                    target: state.currentNode.value?.properties,
                    onCommit: () => commitNodeUpdate(state)
                })
            )
        )
    );

    const title = NodeTypeToName[state.currentNode.value?.type as NodeType] ?? "节点属性";

    return h("div", { style: { padding: "10px" } }, [
        h("div", { style: { fontSize: "16px", fontWeight: "600" } }, title),

        h(
            ElForm,
            {
                ref: state.formRef,
                model: node.properties,
                rules: state.formRules.value,
                labelPosition: "top"
            },
            () =>
                h(
                    ElCollapse,
                    {
                        accordion: true,
                        modelValue: Object.keys(state.grouping.value)[0]
                    },
                    () => collapseItems
                )
        )
    ]);
}
