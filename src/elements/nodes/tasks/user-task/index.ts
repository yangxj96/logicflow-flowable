import { LogicFlow } from "@logicflow/core";
import { UserTaskModel } from "./model";
import { UserTaskView } from "./view";

/**
 * 注册用户节点
 *
 * @param lf {@link LogicFlow} 实例对象
 */
export function registerUserTask(lf: LogicFlow) {
    lf.register({
        type: UserTaskModel.type,
        model: UserTaskModel,
        view: UserTaskView
    });
}
