import type LogicFlow from '@logicflow/core'
import {StartEvent} from "../nodes/events/StartEvent";
import {SequenceFlow} from '../edges/sequence/SequenceFlow';
import {UserTask} from "../nodes/tasks/UserTask";
import {EndEvent} from "../nodes/events/EndEvent"

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
