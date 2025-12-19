import type LogicFlow from "@logicflow/core";
import { registerAll } from "./register";
import { registerDefaultPropertyRenderers } from "../property-panel/renderer/register-defaults";
import { resolveFlowableOptions } from "./default-options";

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
    }
};

export default FlowablePlugin;
