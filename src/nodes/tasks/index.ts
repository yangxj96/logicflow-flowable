import { LogicFlow } from "@logicflow/core";
import { registerUserTask } from "./user-task";

/**
 * 注册所有任务节点
 *
 * @param lf {@link LogicFlow} 实例对象
 */
export function registerTaskNodes(lf: LogicFlow) {
    registerUserTask(lf);
}
