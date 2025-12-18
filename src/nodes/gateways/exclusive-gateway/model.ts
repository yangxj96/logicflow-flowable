import { DiamondNodeModel } from "@logicflow/core";
import { ExclusiveGatewayProperties } from "../../../properties/gateways/exclusive-gateway";
import { BpmnIdGenerator } from "../../../utils/id-generator";


export class ExclusiveGatewayModel extends DiamondNodeModel {

    static readonly type = "bpmn:exclusiveGateway";

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
