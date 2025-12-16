// 插件入口
import type LogicFlow from '@logicflow/core'
import {registerAll} from "./register";

export const FlowablePlugin: LogicFlow.ExtensionDefinition = {
    pluginName: 'flowable',
    install(lf: LogicFlow) {
        registerAll(lf)
    }
}

export default FlowablePlugin;
