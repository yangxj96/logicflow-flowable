// 注册节点/边
import {LogicFlow} from '@logicflow/core';
import {registerEventNodes} from "../nodes/events";
import {registerTaskNodes} from "../nodes/tasks";

import { registerSequenceEdges } from '../edges/sequence'

export function registerAll(lf: LogicFlow) {
    registerEventNodes(lf);
    registerTaskNodes(lf);
    registerSequenceEdges(lf);
}
