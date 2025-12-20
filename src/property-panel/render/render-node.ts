import { h } from "vue";
import { ElCollapse, ElCollapseItem, ElForm } from "element-plus";
import { renderFormItem } from "./render-form-item";
import { commitNodeUpdate } from "../panel.actions";

/**
 * 节点属性面板
 * @param state 状态
 */
export function renderNodePanel(state: any) {
    const node = state.currentNode.value;

    if (!node) {
        return h("div", { style: { padding: "10px" } }, "请选择一个节点");
    }

    const collapseItems = Object.entries(state.groupedProperties.value).map(([group, props]: any) =>
        h(ElCollapseItem, { title: group, name: group }, () => props.map((p: any) => renderFormItem(state, p, {
            type: "node",
            target: state.currentNode.value.properties,
            onCommit: () => commitNodeUpdate(state)
        })))
    );

    return h("div", { style: { padding: "10px" } }, [
        h("div", { style: { fontSize: "16px", fontWeight: "600" } }, "节点属性"),

        h(
            ElForm,
            {
                ref: state.formRef,
                model: node.properties,
                rules: state.elFormRules.value,
                labelPosition: "top"
            },
            () =>
                h(
                    ElCollapse,
                    {
                        accordion: true,
                        modelValue: Object.keys(state.groupedProperties.value)[0]
                    },
                    () => collapseItems
                )
        )
    ]);
}
