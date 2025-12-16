import type LogicFlow from '@logicflow/core'
import {StartEvent} from "../logicflow/start-event";
import {SequenceFlow} from '../logicflow/sequence-flow';
import {UserTask} from "../logicflow/user-task";
import {EndEvent} from "../logicflow/end-event"

export const FlowablePlugin: LogicFlow.ExtensionDefinition = {
    pluginName: 'flowable',
    install(lf: LogicFlow) {
        // 后续注册节点
        lf.register(StartEvent);
        lf.register(SequenceFlow);
        lf.register(UserTask);
        lf.register(EndEvent);
    }
}
