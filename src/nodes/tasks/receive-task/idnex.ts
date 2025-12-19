import { LogicFlow } from "@logicflow/core";
import { ReceiveTaskModel } from "./model";
import { ReceiveTaskView } from "./view";

/**
 * 注册接收任务节点
 *
 * @param lf {@link LogicFlow} 实例对象
 */
export function registerReceiveTask(lf: LogicFlow) {
    lf.register({
        type: ReceiveTaskModel.type,
        model: ReceiveTaskModel,
        view: ReceiveTaskView
    });
}
