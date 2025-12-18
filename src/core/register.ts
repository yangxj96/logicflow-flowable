// 注册节点
import { LogicFlow } from "@logicflow/core";
import { registerEventNodes } from "../nodes/events";
import { registerTaskNodes } from "../nodes/tasks";
// 注册线
import { registerSequenceEdges } from "../edges/sequence";
import { initProcessContext } from "../context/process";
import { registerGatewayNodes } from "../nodes/gateways";

/**
 * 注册相关的所有组件
 * @param lf {@link LogicFlow} 实例对象
 */
export function registerAll(lf: LogicFlow) {
    // 初始化流程上下文
    initProcessContext(lf);
    // 注册相关节点
    registerEventNodes(lf);
    registerTaskNodes(lf);
    registerSequenceEdges(lf);
    registerGatewayNodes(lf);
}
