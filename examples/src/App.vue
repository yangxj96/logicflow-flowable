<script setup lang="ts">
import LogicFlow from "@logicflow/core";
import { Control, SelectionSelect } from "@logicflow/extension";
import "@logicflow/core/dist/index.css";
import "@logicflow/extension/dist/index.css";
import { onMounted, useTemplateRef } from "vue";
import Flowable, { type FlowablePluginOptions } from "@yangxj96/logicflow-flowable";
import { ElMessage } from "element-plus";

const container = useTemplateRef<HTMLDivElement>("container");
const graph = useTemplateRef<HTMLDivElement>("graph");
const panel = useTemplateRef<HTMLDivElement>("panel");

onMounted(() => {
    const lf = new LogicFlow({
        container: container.value!,
        grid: true,
        history: true,
        plugins: [Control, SelectionSelect, Flowable.Plugin],
        pluginsOptions: {
            selectionSelect: {
                exclusiveMode: false
            },
            flowable: {
                propertyPanel: {
                    enabled: true,
                    container: panel.value!,
                    defaultRenderers: true
                },
                dndPanel: {
                    enabled: true,
                    container: graph.value!
                }
            } as FlowablePluginOptions
        }
    });

    (lf.extension.control as Control)?.addItem({
        key: "export",
        title: "",
        text: "导出",
        iconClass: "export",
        onClick: lf => {
            let xml = Flowable.toBpmnXml(lf);
            console.log(xml);
        }
    });

    lf.render({
        nodes: [
            {
                type: "bpmn:startEvent",
                x: 100,
                y: 200
            },
            {
                type: "bpmn:userTask",
                x: 300,
                y: 200
            },
            {
                type: "bpmn:endEvent",
                x: 500,
                y: 200
            }
        ]
    });

    // 监听事件
    lf.on("property:selectChange", ({ node, property, payload, target, targetType }) => {
        console.log("select 变化了");
        console.log("节点:", node);
        console.log("字段:", property);
        console.log("新值:", payload);
        console.log("target:", target);
        console.log("targetType:", targetType);
    });

    // 弹框
    lf.on("toast", message => {
        ElMessage.error(message);
    });

});
</script>

<template>
    <el-row class="box">
        <el-col :span="4" class="col">
            <div ref="graph" style="height: 100%; width: 100%" />
        </el-col>
        <el-col :span="14" class="col">
            <div ref="container" style="height: 99%; width: 100%" />
        </el-col>
        <el-col :span="6" class="col">
            <div ref="panel" style="height: 100%; width: 100%" />
        </el-col>
    </el-row>
</template>

<style>

body {
    padding: 0;
    margin: 0;
}

.box {
    width: 100vw;
}

.col {
    height: 100vh;
}
</style>
