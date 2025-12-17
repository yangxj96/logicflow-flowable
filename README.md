# logicflow-flowable

> 基于 **LogicFlow** 的 **Flowable BPMN** 设计器与数据转换工具

`logicflow-flowable` 是一个将前端流程建模库 **LogicFlow** 与流程引擎 **Flowable BPMN** 规范打通的项目，提供：

* 🧩 Flowable BPMN 节点 / 连线的前端建模能力
* 🔄 LogicFlow JSON ⇄ Flowable BPMN XML 的双向转换
* 🧱 可扩展的节点、属性与命名空间设计
* 🛠️ 适合二次开发的工程化结构

该项目适用于 **流程设计器**、**低代码 / BPM 平台**、**工作流可视化建模** 等场景。

---

## ✨ 特性

* **BPMN 2.0 规范**：生成符合 Flowable / Activiti / Camunda 兼容的 BPMN XML
* **LogicFlow 深度集成**：基于 LogicFlow 自定义节点、边与属性
* **Flowable 扩展支持**：支持 `flowable:*` 扩展属性与命名空间
* **模块化设计**：节点、边、流程、XML 转换逻辑完全解耦
* **可定制 ID 生成器**：避免节点 / 连线 ID 冲突

---

## 📦 安装(暂未完成)

```bash
npm install @yangxj96/logicflow-flowable
# or
pnpm add @yangxj96/logicflow-flowable
# or
yarn add @yangxj96/logicflow-flowable
```

> 依赖前置：
>
> * `logicflow` ^2.2.x
> * `xml-formatter`

---

## 🚀 快速开始

### 1️⃣ 初始化使用

```ts
import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/index.css";
import FlowablePlugin, * as Flowable from "@yangxj96/logicflow-flowable";
import { Control, DndPanel, SelectionSelect } from "@logicflow/extension";
import "@logicflow/extension/dist/index.css";

const container = useTemplateRef<HTMLDivElement>("container");
const panel = useTemplateRef<HTMLDivElement>("panel");

const lf = new LogicFlow({
  container: container.value!,
  grid: true,
  plugins: [Control, DndPanel, SelectionSelect, FlowablePlugin],
})

// 注册DND面板,也就是左侧的空间面板
(logicFlow.extension.dndPanel as DndPanel)?.setPatternItems(Flowable.getFlowableDndItems());
// 导出xml的方式
(logicFlow.extension.control as Control)?.addItem({
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

lf.render()

// 注册属性面板,也就是右侧流程和组件属性
Flowable.registerPropertyPanel({
    container: panel.value!,
    lf: lf
});
```

```html
<template>
    <el-row style="height: 100%">
        <el-col :span="18" style="height: 100%">
            <div ref="container" style="height: 100%; width: 100%" />
        </el-col>
        <el-col :span="6" style="height: 100%">
            <div ref="panel" style="height: 100%; width: 100%" />
        </el-col>
    </el-row>
</template>
```

---

### 2️⃣ 生成示例

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:flowable="http://flowable.org/bpmn"
                  targetNamespace="http://www.flowable.org/processdef">
  <bpmn:process id="Process_1" isExecutable="true">
    ...
  </bpmn:process>
</bpmn:definitions>
```

---

## ⚙️ 核心 API

### `toBpmnXml(lf: LogicFlow)`

将 LogicFlow 的 GraphData 转换为 BPMN XML。

---

## 🧠 设计说明

* **节点 → XML**：每个节点拥有独立的 `nodeToXml` 实现
* **边 → XML**：统一由 `edgeToXml` 处理
* **命名空间集中管理**：避免 XML 冲突
* **格式化输出**：基于 `xml-formatter`

---

## 🧪 适用场景

* BPM / 工作流系统
* Flowable 在线设计器
* 低代码流程引擎
* 自定义审批流

---

## 📌 注意事项

* 本项目关注 **建模与 XML 转换**，不包含 Flowable 后端部署逻辑
* 不同引擎（Flowable / Camunda）扩展属性可能需要调整命名空间

---

## 🤝 贡献

欢迎 PR / Issue：

1. Fork 本仓库
2. 新建分支：`feat/xxx`
3. 提交代码
4. 发起 Pull Request

---

## 📄 License

Apache License 2.0

---

如果你正在构建 **LogicFlow + Flowable** 的流程设计器，这个项目可以直接作为基础能力层使用 👍
