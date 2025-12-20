import type LogicFlow from "@logicflow/core";
import { registerAll } from "./register";
import { registerDefaultPropertyRenderers } from "../property-panel/renderer/register-defaults";
import { resolveFlowableOptions } from "./default-options";
import { NODE_TYPES } from "./constants";

/**
 * 插件定义
 */
export const FlowablePlugin: LogicFlow.ExtensionDefinition = {
    pluginName: "flowable",
    install(lf: LogicFlow, rawOptions?: any) {
        const options = resolveFlowableOptions(rawOptions);

        // 注册默认属性类型渲染器
        if (options.propertyPanel.defaultRenderers) {
            registerDefaultPropertyRenderers();
        }

        // 注册所有组件
        registerAll(lf);

        // 设置默认连线
        lf.setDefaultEdgeType(NODE_TYPES.SEQUENCE_FLOW);
    }
};

export default FlowablePlugin;
