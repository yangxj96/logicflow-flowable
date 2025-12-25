import { PolylineEdgeModel } from "@logicflow/core";
import { NODE_TYPES } from "../../core/constants";
import { BpmnIdGenerator } from "../../utils/id-generator";
import { SequenceFlowProperties } from "../../properties/edges/sequence-flow";

/**
 * SequenceFlow模型,自定义连线
 */
export class SequenceFlowModel extends PolylineEdgeModel {
    static readonly type = NODE_TYPES.SEQUENCE_FLOW;

    constructor(data: any, graphModel: any) {
        super(data, graphModel);

        // 默认属性，放条件表达式
        this.properties = {
            conditionExpression: ""
        };

        // SequenceFlow 允许连入、连出
        this.isAllowIncoming = true;
        this.isAllowOutgoing = true;

        let bpmnId = BpmnIdGenerator.generate();
        this.id = bpmnId;

        // 初始化 properties（非常关键）
        this.properties = {};
        SequenceFlowProperties.forEach(prop => {
            this.properties[prop.key] = "";
            if (prop.key === "id") {
                this.properties[prop.key] = bpmnId;
            }
            if (prop.key === "sourceRef") {
                this.properties[prop.key] = data.sourceNodeId;
            }
            if (prop.key === "targetRef") {
                this.properties[prop.key] = data.targetNodeId;
            }
        });
    }
}
