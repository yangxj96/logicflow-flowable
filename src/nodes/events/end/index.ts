import { LogicFlow } from "@logicflow/core";
import { EndEventModel } from "./model";
import { EndEventView } from "./view";

/**
 * 注册结束事件节点
 *
 * @param lf {@link LogicFlow} 实例对象
 */
export function registerEndEvent(lf: LogicFlow) {
    lf.register({
        type: EndEventModel.type,
        view: EndEventView,
        model: EndEventModel
    });
}
