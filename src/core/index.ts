import type LogicFlow from "@logicflow/core";
import { registerAll } from "./register";
import { resolveFlowableOptions } from "./default-options";
import { NODE_TYPES } from "./constants";
import { registerContextMenu } from "../features/context-menu";
import { registerDefaultPropertyRenderers } from "../features/property-panel/renderer/register-defaults";
import { registerEdgeConstraint } from "../features/behaviors";

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

        // 注册右键上下文菜单
        registerContextMenu(lf);

        // 注册线初始化
        registerEdgeConstraint(lf);

        // 设置默认连线
        lf.setDefaultEdgeType(NODE_TYPES.SEQUENCE_FLOW);
    }
};

export default FlowablePlugin;
