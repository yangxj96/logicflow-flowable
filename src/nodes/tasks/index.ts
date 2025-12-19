import { LogicFlow } from "@logicflow/core";
import { registerUserTask } from "./user-task";
import { registerReceiveTask } from "./receive-task/idnex";
import { registerScriptTask } from "./script-task/idnex";
import { registerServiceTask } from "./service-task/idnex";

/**
 * 注册所有任务节点
 *
 * @param lf {@link LogicFlow} 实例对象
 */
export function registerTaskNodes(lf: LogicFlow) {
    registerReceiveTask(lf);
    registerScriptTask(lf);
    registerServiceTask(lf);
    registerUserTask(lf);
}
