import { ExclusiveGatewayModel } from "./model";
import { ExclusiveGatewayView } from "./view";
import LogicFlow from "@logicflow/core";


export function registerExclusiveGateway(lf: LogicFlow) {
    lf.register({
        type: ExclusiveGatewayModel.type,
        view: ExclusiveGatewayView,
        model: ExclusiveGatewayModel
    });
}
