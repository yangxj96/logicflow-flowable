import { CircleNodeModel } from "@logicflow/core";
import { BPMN_PREFIX } from "../../../core/constants";

export class EndEventModel extends CircleNodeModel {
    static readonly type = `${BPMN_PREFIX}:endEvent`;

    constructor(data: any, graphModel: any) {
        super(data, graphModel);

        //  固定大小
        this.r = 18;

        // 语义约束
        this.isAllowIncoming = true;
        this.isAllowOutgoing = false;

        // 默认文本
        if (!this.text?.value) {
            this.text.value = "结束";
            this.text.x = this.x;
            this.text.y = this.y + 30;
        }
    }
}
