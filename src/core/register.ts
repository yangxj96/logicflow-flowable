// 注册节点
import { LogicFlow } from "@logicflow/core";
import { registerEventNodes } from "../elements/nodes/events";
import { registerTaskNodes } from "../elements/nodes/tasks";
import { registerGatewayNodes } from "../elements/nodes/gateways";
// 注册线
import { registerSequenceEdges } from "../elements/edges/sequence";
// 上下文
import { initProcessContext } from "../features/context/process";

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
