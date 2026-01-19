import type LogicFlow from "@logicflow/core";
import { registerAll } from "./register";
import { NODE_TYPES } from "./constants";
import { registerContextMenu } from "../features/context-menu";
import { registerEdgeConstraint } from "../features/behaviors";
import { registerEvent } from "./event";

/**
 * 插件定义
 */
export const FlowablePlugin: LogicFlow.ExtensionDefinition = {
    pluginName: "flowable",
    install(lf: LogicFlow) {

        // 注册事件
        registerEvent(lf);

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
