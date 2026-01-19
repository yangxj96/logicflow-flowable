import LogicFlow from "@logicflow/core";
import { registerStartEvent } from "./start";
import { registerEndEvent } from "./end";

/**
 * 注册所有节点对象
 *
 * @param lf {@link LogicFlow} 实例对象
 */
export function registerEventNodes(lf: LogicFlow) {
    registerStartEvent(lf);
    registerEndEvent(lf);
}
