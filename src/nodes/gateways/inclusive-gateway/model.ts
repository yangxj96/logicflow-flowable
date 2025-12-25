import { ExclusiveGatewayProperties } from "../../../properties/gateways/exclusive-gateway";
import { BpmnIdGenerator } from "../../../utils/id-generator";
import { NODE_TYPES } from "../../../core/constants";
import { GatewayBaseModel } from "../gateway-base-model";
import { BehaviorsBase, NodeBehavior } from "../../../types";
import { InclusiveGatewayBehavior } from "../../../behaviors/nodes/gateways/inclusive-gateway";

/**
 * 包容网关模型
 */
export class InclusiveGatewayModel extends GatewayBaseModel implements BehaviorsBase {

    static readonly type = NODE_TYPES.INCLUSIVE_GATEWAY;

    getBehavior(): NodeBehavior {
        return InclusiveGatewayBehavior;
    }

    override initNodeData(data: any) {
        super.initNodeData(data);
        // BPMN 属性
        let bpmnId = BpmnIdGenerator.generate();
        this.id = bpmnId;
        this.text.value = "包容网关";

        ExclusiveGatewayProperties.forEach(prop => {
            this.properties[prop.key] ??= "";
            if (prop.key === "id") {
                this.properties[prop.key] = bpmnId;
            }
            if (prop.key === "name") {
                this.properties[prop.key] = "包容网关";
            }
        });
    }
}
