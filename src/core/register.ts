// 注册节点
import { LogicFlow } from "@logicflow/core";
import { registerEventNodes } from "../nodes/events";
import { registerTaskNodes } from "../nodes/tasks";
// 注册线
import { registerSequenceEdges } from "../edges/sequence";
import { initProcessContext } from "../context/process";

export function registerAll(lf: LogicFlow) {
    // 初始化流程上下文
    initProcessContext(lf)
    // 注册相关节点
    registerEventNodes(lf);
    registerTaskNodes(lf);
    registerSequenceEdges(lf);
}
