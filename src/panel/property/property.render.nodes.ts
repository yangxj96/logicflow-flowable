import { PropertyPanelState } from "./types";
import { h } from "vue";
import { ElCard, ElForm } from "element-plus";
import { renderErrorCard } from "./property.render.common";

export function renderNodesPanel(state: PropertyPanelState) {
    if (!state.process.value) {
        return renderErrorCard("节点属性", "流程加载异常");
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
                    "节点属性"
                ),
            default: () =>
                h(
                    ElForm,
                    {
                        ref: state.formRef,
                        model: state.process,
                        labelPosition: "top"
                    },
                    () => []
                )
        }
    );
}
