import { ExclusiveGatewayModel } from "./model";
import { ExclusiveGatewayView } from "./view";
import LogicFlow from "@logicflow/core";

/**
 * 注册排他网关组件
 * @param lf {@link LogicFlow} 实例
 */
export function registerExclusiveGateway(lf: LogicFlow) {
    lf.register({
        type: ExclusiveGatewayModel.type,
        view: ExclusiveGatewayView,
        model: ExclusiveGatewayModel
    });
}
