<script setup lang="ts">
import LogicFlow from "@logicflow/core";
import { Control, DndPanel, SelectionSelect } from "@logicflow/extension";
import "@logicflow/core/dist/index.css";
import "@logicflow/extension/dist/index.css";
import { onMounted, useTemplateRef } from "vue";
import Flowable from "@yangxj96/logicflow-flowable";

const container = useTemplateRef<HTMLDivElement>("container");
const panel = useTemplateRef<HTMLDivElement>("panel");

onMounted(() => {
    const lf = new LogicFlow({
        container: container.value!,
        grid: true,
        plugins: [Control, DndPanel, SelectionSelect, Flowable.Plugin],
        pluginsOptions: {
            selectionSelect: {
                exclusiveMode: false
            }
        }
    });

    (lf.extension.dndPanel as DndPanel)?.setPatternItems(Flowable.getFlowableDndItems());
    (lf.extension.control as Control)?.addItem({
        key: "export",
        title: "",
        text: "导出",
        iconClass: "export",
        onClick: lf => {
            console.log(lf);
            let xml = Flowable.toBpmnXml(lf);
            console.log(xml);
        }
    });

    lf.render({});

    Flowable.registerPropertyPanel({
        container: panel.value!,
        lf: lf
    });
});
</script>

<template>
    <el-row class="box">
        <el-col :span="18" class="col">
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
