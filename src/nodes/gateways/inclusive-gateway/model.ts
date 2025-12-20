import { DiamondNodeModel } from "@logicflow/core";
import { ExclusiveGatewayProperties } from "../../../properties/gateways/exclusive-gateway";
import { BpmnIdGenerator } from "../../../utils/id-generator";
import { NODE_TYPES } from "../../../core/constants";

/**
 * 包容网关模型
 */
export class InclusiveGatewayModel extends DiamondNodeModel {
    static readonly type = NODE_TYPES.INCLUSIVE_GATEWAY;

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

    override getNodeStyle() {
        const style = super.getNodeStyle();
        style.stroke = "#222";
        style.strokeWidth = 2;
        style.fill = "#fff";
        return style;
    }

    override getTextStyle() {
        const style = super.getTextStyle();
        style.fontSize = 12;
        return style;
    }
}
