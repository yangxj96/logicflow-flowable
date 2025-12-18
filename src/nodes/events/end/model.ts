import { CircleNodeModel } from "@logicflow/core";
import { BPMN_PREFIX } from "../../../core/constants";
import { BpmnIdGenerator } from "../../../utils/id-generator";
import { EndEventProperties } from "../../../properties/events/end";

/**
 * 结束事件节点模型
 */
export class EndEventModel extends CircleNodeModel {
    static readonly type = `${BPMN_PREFIX}:endEvent`;

    constructor(data: any, graphModel: any) {
        super(data, graphModel);

        //  固定大小
        this.r = 18;

        // 语义约束
        this.isAllowIncoming = true;
        this.isAllowOutgoing = false;

        let bpmnId = BpmnIdGenerator.generate();
        this.id = bpmnId;

        // 初始化 properties（非常关键）
        this.properties = {};
        EndEventProperties.forEach(prop => {
            this.properties[prop.key] = "";
            if (prop.key === "id") {
                this.properties[prop.key] = bpmnId;
            }
        });

        // 默认文本
        if (!this.text?.value) {
            this.text.value = "结束";
            this.text.x = this.x;
            this.text.y = this.y + 30;
        }
    }
}
