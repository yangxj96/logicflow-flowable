import { InclusiveGatewayModel } from "./model";
import { InclusiveGatewayView } from "./view";
import LogicFlow from "@logicflow/core";

/**
 * 注册包容网关组件
 * @param lf {@link LogicFlow} 实例
 */
export function registerInclusiveGateway(lf: LogicFlow) {
    lf.register({
        type: InclusiveGatewayModel.type,
        view: InclusiveGatewayView,
        model: InclusiveGatewayModel
    });
}
