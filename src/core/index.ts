import type LogicFlow from "@logicflow/core";
import { registerAll } from "./register";

/**
 * 插件定义
 */
export const FlowablePlugin: LogicFlow.ExtensionDefinition = {
    pluginName: "flowable",
    install(lf: LogicFlow) {
        registerAll(lf);
    }
};

export default FlowablePlugin;
