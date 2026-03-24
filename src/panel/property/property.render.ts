import { PropertyPanelState } from "./types";
import { computed, h } from "vue";
import { ElCard, ElForm } from "element-plus";
import { NODE_TYPE_NAMES } from "../../core/constants";

/**
 * 渲染属性
 * @param state 状态
 */
export function renderProperty(state: PropertyPanelState) {
    const title = computed(() => {
        const { mode, currentNode, currentEdge } = state;

        if (mode.value === "process") {
            return "流程属性";
        }

        if (mode.value === "node") {
            const type = currentNode.value?.type;
            return (type && NODE_TYPE_NAMES[type]) || "节点属性";
        }

        if (mode.value === "edge") {
            const type = currentEdge.value?.type;
            return (type && NODE_TYPE_NAMES[type]) || "线属性";
        }

        return "";
    });

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
                    title.value
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
