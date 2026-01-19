import "./dnd-panel.ui.css";
import { computed, defineComponent, h } from "vue";
import { useDndState } from "./dnd-panel.state";
import { DndNodeMeta } from "../../types";
import { ElCollapse, ElCollapseItem } from "element-plus";
import LogicFlow from "@logicflow/core";


export function createDndPanel(lf: LogicFlow) {
    return defineComponent({
        name: "FlowableDndPanel",
        setup() {
            // 处理状态
            const state = useDndState(lf);

            // 分组后的节点
            const groups = computed(() => groupByGroup(state.nodes));

            /** 默认展开所有分组 */
            const activeNames = computed(() =>
                groups.value.map((g) => g.group)
            );

            function startDrag(node: any, e: MouseEvent) {
                e.preventDefault();
                if (!state.lf) return;

                state.lf.dnd.startDrag({
                    type: node.type,
                    text: node.label
                });
            }

            return () =>
                h(
                    ElCollapse,
                    {
                        modelValue: activeNames.value,
                        class: "lf-dnd-collapse"
                    },
                    () =>
                        groups.value.map((group) =>
                            h(
                                ElCollapseItem,
                                {
                                    key: group.group,
                                    title: group.group,
                                    name: group.group
                                },
                                () =>
                                    h(
                                        "div",
                                        { class: "lf-dnd-grid" },
                                        group.items.map((node) =>
                                            h(
                                                "div",
                                                {
                                                    key: node.type,
                                                    class: "lf-dnd-grid-item",
                                                    onMousedown: (e: MouseEvent) => startDrag(node, e)
                                                },
                                                [
                                                    h(
                                                        "div",
                                                        { class: "lf-dnd-icon" },
                                                        node.icon &&
                                                        h("img", {
                                                            src: node.icon,
                                                            class: "lf-dnd-icon-img",
                                                            draggable: false
                                                        })
                                                    ),
                                                    h(
                                                        "div",
                                                        { class: "lf-dnd-label" },
                                                        node.label
                                                    )
                                                ]
                                            )
                                        )
                                    )
                            )
                        )
                );

        }
    });
}

function groupByGroup(items: DndNodeMeta[]) {
    const map = new Map<string, DndNodeMeta[]>();

    items.forEach((item) => {
        if (!map.has(item.group)) {
            map.set(item.group, []);
        }
        map.get(item.group)!.push(item);
    });

    return Array.from(map.entries()).map(([group, items]) => ({
        group,
        items
    }));
}
