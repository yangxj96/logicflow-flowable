// 注册节点
import { LogicFlow } from "@logicflow/core";
import { registerEventNodes } from "../nodes/events";
import { registerTaskNodes } from "../nodes/tasks";
// 注册线
import { registerSequenceEdges } from "../edges/sequence";

export function registerAll(lf: LogicFlow) {
    registerEventNodes(lf);
    registerTaskNodes(lf);
    registerSequenceEdges(lf);
}
