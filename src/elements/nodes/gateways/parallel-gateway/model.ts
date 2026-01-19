import { GatewayBaseModel } from "../gateway-base-model";
import { BehaviorsBase, NodeBehavior, NodeCap, PropertyBase } from "../../../../types";
import { NODE_TYPES } from "../../../../core/constants";
import { ParallelGatewayBehavior } from "../../../../features/behaviors/nodes/gateways/parallel-gateway";
import { BpmnIdGenerator } from "../../../../utils/id-generator";
import { ExclusiveGatewayProperties } from "../../../../features/properties/gateways/exclusive-gateway";

/**
 * 并行网关模型
 */
export class ParallelGatewayModel extends GatewayBaseModel implements NodeCap {

    static readonly type = NODE_TYPES.PARALLEL_GATEWAY;

    getNodeProperties(): PropertyBase[] {
        return ExclusiveGatewayProperties;
    }

    getBehavior(): NodeBehavior {
        return ParallelGatewayBehavior;
    }

    override initNodeData(data: any) {
        super.initNodeData(data);

        // BPMN 属性
        let bpmnId = BpmnIdGenerator.generate();
        this.id = bpmnId;
        this.text.value = "并行网关";

        this.getNodeProperties().forEach(prop => {
            this.properties[prop.key] ??= "";
            if (prop.key === "id") {
                this.properties[prop.key] = bpmnId;
            }
            if (prop.key === "name") {
                this.properties[prop.key] = "并行网关";
            }
        });
    }
}
