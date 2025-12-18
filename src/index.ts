import FlowablePlugin from "./core";
import { getFlowableDndItems } from "./utils/dnd";
import { toBpmnXml } from "./utils/flowable";
import { registerPropertyPanel } from "./panel";

/**
 * 基于 LogicFlow 的 BPMN 2.0 流程图可视化与建模插件，无缝对接 Flowable 工作流引擎。
 *
 * @property {typeof FlowablePlugin} Plugin - 插件本体，用于 LogicFlow.use(Flowable.Plugin)
 * @property {Function} getFlowableDndItems - 获取左侧拖拽面板的节点配置列表
 * @property {Function} toBpmnXml - 将 LogicFlow 图数据转换为标准 BPMN 2.0 XML 字符串
 * @property {Function} registerPropertyPanel - 注册自定义属性面板（高级用法）
 */
const Flowable = {
    Plugin: FlowablePlugin,
    getFlowableDndItems,
    toBpmnXml,
    registerPropertyPanel
};

export * from "./types";
export default Flowable;
