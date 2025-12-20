import { ParallelGatewayModel } from "./model";
import { ParallelGatewayView } from "./view";
import LogicFlow from "@logicflow/core";

/**
 * 注册并行网关组件
 * @param lf {@link LogicFlow} 实例
 */
export function registerParallelGateway(lf: LogicFlow) {
    lf.register({
        type: ParallelGatewayModel.type,
        view: ParallelGatewayView,
        model: ParallelGatewayModel
    });
}
