import { GatewayBaseModel } from "../gateway-base-model";
import { BehaviorsBase, NodeBehavior } from "../../../../types";
import { NODE_TYPES } from "../../../../core/constants";
import { ExclusiveGatewayBehavior } from "../../../../features/behaviors/nodes/gateways/exclusive-gateway";
import { BpmnIdGenerator } from "../../../../utils/id-generator";
import { ExclusiveGatewayProperties } from "../../../../features/properties/gateways/exclusive-gateway";

/**
 * 排他网关模型
 */
export class ExclusiveGatewayModel extends GatewayBaseModel implements BehaviorsBase {

    static readonly type = NODE_TYPES.EXCLUSIVE_GATEWAY;

    getBehavior(): NodeBehavior {
        return ExclusiveGatewayBehavior;
    }

    override initNodeData(data: any) {
        super.initNodeData(data);
        // BPMN 属性
        let bpmnId = BpmnIdGenerator.generate();
        this.id = bpmnId;
        this.text.value = "排他网关";

        ExclusiveGatewayProperties.forEach(prop => {
            this.properties[prop.key] ??= "";
            if (prop.key === "id") {
                this.properties[prop.key] = bpmnId;
            }
            if (prop.key === "name") {
                this.properties[prop.key] = "排他网关";
            }
        });
    }
}
