# 🧩 logicflow-flowable

> 基于 [LogicFlow](https://logicflow.org) 的 **BPMN 2.0 流程图建模插件**，无缝对接 [Flowable](https://www.flowable.org) 工作流引擎。  
> 用 LogicFlow 画流程图，一键导出 Flowable 可直接部署的 BPMN XML！

[![npm version](https://img.shields.io/npm/v/@yangxj96/logicflow-flowable?color=blue)](https://www.npmjs.com/package/@yangxj96/logicflow-flowable)
[![License](https://img.shields.io/github/license/yangxj96/logicflow-flowable)](LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@yangxj96/logicflow-flowable)](https://bundlephobia.com/package/@yangxj96/logicflow-flowable)

![流程设计器示例](https://via.placeholder.com/800x450/e0e0e0/333333?text=LogicFlow+%2B+Flowable+BPMN+Designer+Preview)  
*▲ 支持拖拽节点、属性配置、BPMN XML 导出*

---

## 🚀 快速开始

### 1. 安装

```bash
npm install @yangxj96/logicflow-flowable
```

### 2. 使用

```ts
import LogicFlow from '@logicflow/core';
import '@logicflow/core/dist/style/index.css';

// 引入扩展（如 Control）
import { Control, DndPanel } from '@logicflow/extension';
import '@logicflow/extension/dist/style/index.css';

// 引入本插件
import Flowable from '@yangxj96/logicflow-flowable';

// 初始化画布
const lf = new LogicFlow({
    container: document.getElementById('app'),
    plugins: [Control, DndPanel, Flowable.Plugin], // 注册插件
    grid: true,
});

// 设置左侧工具栏（DnD 面板）
(Control as any)?.dndPanel?.setPatternItems(Flowable.getFlowableDndItems());

// 添加“导出 BPMN”按钮
(Control as any)?.control?.addItem({
    key: 'export-bpmn',
    text: '导出 BPMN',
    onClick: () => {
        const xml = Flowable.toBpmnXml(lf);
        console.log(xml);
        // 可下载或发送至后端 Flowable 引擎
    }
});

lf.render({});

// 注册属性面板
Flowable.registerPropertyPanel({
    container: panel.value!,
    lf: lf
});
```

---

## 🧰 支持的 BPMN 元素

#### 事件类

| BPMN 元素 | 状态 | LogicFlow 节点类型    |
|---------|----|-------------------|
| 开始事件    | ✅  | `bpmn:startEvent` |
| 结束事件    | ✅  | `bpmn:endEvent`   |
| 消息开始事件  | ⏳  | —                 |
| 定时开始事件  | ⏳  | —                 |
| 中间捕获事件  | ⏳  | —                 |

#### 任务类

| BPMN 元素 | 状态 | LogicFlow 节点类型  |
|---------|----|-----------------|
| 用户任务    | ✅  | `bpmn:userTask` |
| 服务任务    | ⏳  | —               |
| 脚本任务    | ⏳  | —               |
| 接收任务    | ⏳  | —               |
| 业务规则任务  | ⏳  | —               |

#### 网关类

| BPMN 元素 | 状态 | LogicFlow 节点类型          |
|---------|----|-------------------------|
| 排他网关    | ✅  | `bpmn:exclusiveGateway` |
| 并行网关    | ⏳  | —                       |
| 包容网关    | ⏳  | —                       |
| 事件网关    | ⏳  | —                       |

#### 子流程与调用

| BPMN 元素 | 状态 | LogicFlow 节点类型 |
|---------|----|----------------|
| 嵌入式子流程  | ⏳  | —              |
| 调用活动    | ⏳  | —              |

#### 连线类

| BPMN 元素 | 状态 | LogicFlow 节点类型      |
|---------|----|---------------------|
| 序列流（连线） | ✅  | `bpmn:sequenceFlow` |
| 消息流     | ⏳  | —                   |

> ✅ = 已支持 ⏳ = 计划中（欢迎 PR！）

---

## 📦 API

本插件导出一个命名空间对象，推荐按如下方式使用：

```ts
import Flowable from '@yangxj96/logicflow-flowable';
```

| 属性/方法                                     | 类型                             | 说明                                                 |
|-------------------------------------------|--------------------------------|----------------------------------------------------|
| `Flowable.Plugin`                         | `object`                       | LogicFlow 插件本体，用于 `LogicFlow.use()` 或 `plugins` 配置 |
| `Flowable.getFlowableDndItems()`          | `() => Array`                  | 获取左侧拖拽面板的 BPMN 节点配置列表                              |
| `Flowable.toBpmnXml(lf)`                  | `(lf: LogicFlow) => string`    | 将当前流程图数据转换为标准 BPMN 2.0 XML 字符串                     |
| `Flowable.registerPropertyPanel(options)` | `(opts: PanelOptions) => void` | 手动注册右侧属性面板（高级用法）                                   |

> 所有方法均带有完整 TypeScript 类型定义和 JSDoc，IDE 自动提示支持良好。

---

## 🗂️ 项目结构

```
src/
├── core/          # 插件主逻辑（节点注册、扩展）
├── utils/         # 工具函数（XML 转换、DnD 生成）
├── panel/         # 属性面板实现
├── types/         # TypeScript 类型定义
└── index.ts       # 统一导出入口
```

---

## 🧪 本地开发

```bash
# 安装依赖
npm install

# 启动构建监听（输出到 dist/）
npm run dev

# 运行示例（直接打开 examples/basic.html）
# 修改代码后刷新页面即可看到效果
```

---

## 🤝 贡献

欢迎提交 Issue 或 Pull Request！  
在贡献前，请确保：

- 新增节点遵循现有模式
- 提交前运行 `npm run build`
- 更新 README 中的支持列表（如适用）

---

## 📄 License

本项目采用 [Apache License 2.0](LICENSE) 开源协议。  
Copyright © 2025 yangxj96. All rights reserved.

> 本插件仅提供前端建模与 XML 生成能力，不包含 Flowable 引擎本身。
