import { LogicFlow } from "@logicflow/core";
import { StartEventModel } from "./model";
import { StartEventView } from "./view";

/**
 * 注册开始时间节点
 *
 * @param lf {@link LogicFlow} 实例对象
 */
export function registerStartEvent(lf: LogicFlow) {
    lf.register({
        type: StartEventModel.type,
        view: StartEventView,
        model: StartEventModel
    });
}
