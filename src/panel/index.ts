import type LogicFlow from "@logicflow/core";
import { computed, createApp, defineComponent, h, ref } from "vue";
import { ElCollapse, ElCollapseItem, ElDivider, ElForm, ElFormItem, ElInput } from "element-plus";
import { NodeTypeToProperties } from "../properties";
import { BaseProperty } from "../properties/base";
import { getProcessContext } from "../context/process";
import type { FormInstance } from "element-plus";
import { buildElFormRules } from "../validation/ui/element-plus";

/** 面板参数 */
export interface PanelOptions {
    container: HTMLElement;
    lf: LogicFlow;
}

export function registerPropertyPanel({ container, lf }: PanelOptions) {
    const Panel = defineComponent({
        name: "LogicFlowPropertyPanel",

        setup() {
            // 基础状态
            const selectedType = ref<"node" | "process">("process");
            const currentNode = ref<LogicFlow.NodeData | null>(null);
            const properties = ref<BaseProperty[]>([]);
            const groupedProperties = ref<Record<string, BaseProperty[]>>({});
            const processModel = ref(getProcessContext(lf));
            // 表单验证
            const formRef = ref<FormInstance>();
            const elFormRules = computed(() => {
                if (!currentNode.value) return {};
                return buildElFormRules(properties.value, {
                    nodeType: currentNode.value.type,
                    allValues: currentNode.value.properties
                });
            });

            // LogicFlow 事件
            lf.on("node:click", async ({ data }) => {
                const ok = await validateCurrentNode();
                if (!ok) return;

                selectedType.value = "node";
                currentNode.value = data;

                properties.value = NodeTypeToProperties[data.type] || [];
                initNodeProperties();
                groupProperties();
            });

            lf.on("blank:click", async () => {
                // const ok = await validateCurrentNode();
                // if (!ok) return;

                selectedType.value = "process";
                currentNode.value = null;
            });

            // 验证节点
            const validateCurrentNode = async () => {
                if (!formRef.value) return true;

                try {
                    await formRef.value.validate();
                    return true;
                } catch {
                    return false;
                }
            };

            // 初始化节点属性
            const initNodeProperties = () => {
                if (!currentNode.value) return;

                const props = (currentNode.value.properties ||= {});
                properties.value.forEach(p => {
                    if (props[p.key] === undefined) {
                        props[p.key] = p.defaultValue ?? "";
                    }
                });
            };

            // 属性分组
            const groupProperties = () => {
                groupedProperties.value = properties.value.reduce(
                    (acc, p) => {
                        const groupName = p.group || "基础信息";

                        if (!acc[groupName]) {
                            acc[groupName] = [];
                        }

                        acc[groupName].push(p);
                        return acc;
                    },
                    {} as Record<string, BaseProperty[]>
                );
            };

            // 提交节点更新
            const commitNodeUpdate = () => {
                if (!currentNode.value) return;

                lf.setProperties(currentNode.value.id, currentNode.value.properties as LogicFlow.PropertiesType);

                // 同步节点文本
                const name = currentNode.value.properties?.name;
                if (typeof name === "string") {
                    lf.updateText(currentNode.value.id, name);
                }
            };

            // 渲染单个表单项
            const renderFormItem = (property: BaseProperty) => {
                const value = currentNode.value?.properties?.[property.key] ?? "";

                const update = (val: any) => {
                    if (!currentNode.value?.properties) return;
                    currentNode.value.properties[property.key] = val;
                    commitNodeUpdate();
                };

                return h(ElFormItem, { label: property.label, key: property.key, prop: property.key }, () =>
                    h(ElInput, {
                        modelValue: value,
                        "onUpdate:modelValue": update,
                        placeholder: `请输入${property.label}`,
                        readonly: property.key === "id",
                        disabled: property.key === "id"
                    })
                );
            };

            // 渲染节点属性面板
            const renderNodePanel = () => {
                if (!currentNode.value) {
                    return h("div", "请选择一个节点");
                }

                const collapseItems = Object.entries(groupedProperties.value).map(([groupName, props]) =>
                    h(
                        ElCollapseItem,
                        { title: groupName, name: groupName, key: groupName },
                        {
                            default: () => props.map(renderFormItem)
                        }
                    )
                );
                return h(
                    "div",
                    {
                        style: { padding: "10px" }
                    },
                    [
                        h("div", { style: { fontSize: "16px", fontWeight: "600" } }, "节点属性"),
                        h(
                            ElForm,
                            {
                                ref: formRef,
                                model: currentNode.value.properties,
                                rules: elFormRules.value,
                                labelPosition: "top",
                                style: { paddingTop: "10px" }
                            },
                            () =>
                                h(
                                    ElCollapse,
                                    {
                                        accordion: true,
                                        modelValue: Object.keys(groupedProperties.value)[0]
                                    },
                                    () => collapseItems
                                )
                        )
                    ]
                );
            };

            // 渲染流程属性面板
            const renderProcessPanel = () => {
                const model = processModel.value;

                return h(
                    "div",
                    {
                        style: { padding: "10px" }
                    },
                    [
                        h("div", { style: { fontSize: "16px", fontWeight: "600" } }, "流程定义"),
                        h(ElDivider),
                        h(
                            ElForm,
                            {
                                model: model,
                                ref: formRef,
                                rules: elFormRules.value,
                                labelPosition: "top",
                                style: { paddingTop: "10px" }
                            },
                            () => [
                                h(ElFormItem, { label: "流程 ID" }, () =>
                                    h(ElInput, {
                                        modelValue: model.id,
                                        "onUpdate:modelValue": (v: string) => (model.id = v),
                                        disabled: true,
                                        readonly: true
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
                    ]
                );
            };

            // 渲染
            return () => {
                return selectedType.value === "node" ? renderNodePanel() : renderProcessPanel();
            };
        }
    });

    // 挂载
    createApp(Panel).mount(container);
}
