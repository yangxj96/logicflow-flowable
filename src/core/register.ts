// 注册节点/边
import { LogicFlow } from '@logicflow/core'

// 这里只 import “注册函数”，不 import 具体实现
import {StartEvent} from "../nodes/events/StartEvent";
import {SequenceFlow} from '../edges/sequence/SequenceFlow';
import {UserTask} from "../nodes/tasks/UserTask";
import {EndEvent} from "../nodes/events/EndEvent"

export function registerAll(lf: LogicFlow) {
    lf.register(StartEvent);
    lf.register(SequenceFlow);
    lf.register(UserTask);
    lf.register(EndEvent);
}
