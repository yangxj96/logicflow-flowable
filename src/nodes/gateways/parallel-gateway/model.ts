import { ExclusiveGatewayProperties } from "../../../properties/gateways/exclusive-gateway";
import { BpmnIdGenerator } from "../../../utils/id-generator";
import { NODE_TYPES } from "../../../core/constants";
import { GatewayBaseModel } from "../gateway-base-model";

/**
 * 并行网关模型
 */
export class ParallelGatewayModel extends GatewayBaseModel {

    static readonly type = NODE_TYPES.PARALLEL_GATEWAY;

    override initNodeData(data: any) {
        super.initNodeData(data);

        // BPMN 属性
        let bpmnId = BpmnIdGenerator.generate();
        this.id = bpmnId;
        this.text.value = "并行网关";

        ExclusiveGatewayProperties.forEach(prop => {
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
