import { PropertyPanelState } from "./types";
import { h } from "vue";
import { ElCard, ElForm } from "element-plus";
import { renderErrorCard } from "./property.render.common";
import { NODE_TYPE_NAMES } from "../../core/constants";

/**
 * 默认的标题
 */
const DEFAULT_TITLES = {
    process: "流程属性",
    node: "节点属性",
    edge: "线属性"
} as const;

/**
 * 获取属性面板标题
 * @param state 属性面板state
 */
function getTitle(state: PropertyPanelState) {
    const { mode, currentNode, currentEdge } = state;

    if (mode.value === "process") {
        return DEFAULT_TITLES.process;
    }

    if (mode.value === "node") {
        const type = currentNode.value?.type;
        return (type && NODE_TYPE_NAMES[type]) || DEFAULT_TITLES.node;
    }

    if (mode.value === "edge") {
        const type = currentEdge.value?.type;
        return (type && NODE_TYPE_NAMES[type]) || DEFAULT_TITLES.edge;
    }

    return "";
}

/**
 * 渲染属性
 * @param state 状态
 */
export function renderProperty(state: PropertyPanelState) {
    let title = getTitle(state);

    if (!state.process.value) {
        return renderErrorCard(title, "加载异常");
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
                    title
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
