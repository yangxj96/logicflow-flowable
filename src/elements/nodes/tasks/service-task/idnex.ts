import { LogicFlow } from "@logicflow/core";
import { ServiceTaskModel } from "./model";
import { ServiceTaskView } from "./view";

/**
 * 注册服务任务节点
 *
 * @param lf {@link LogicFlow} 实例对象
 */
export function registerServiceTask(lf: LogicFlow) {
    lf.register({
        type: ServiceTaskModel.type,
        model: ServiceTaskModel,
        view: ServiceTaskView
    });
}
