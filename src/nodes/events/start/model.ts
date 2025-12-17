import { CircleNodeModel } from "@logicflow/core";
import { BPMN_PREFIX } from "../../../core/constants";

export class StartEventModel extends CircleNodeModel {
    static readonly type = `${BPMN_PREFIX}:startEvent`;

    constructor(data: any, graphModel: any) {
        super(data, graphModel);

        // StartEvent 固定大小
        this.r = 18;

        // 语义约束
        this.isAllowIncoming = false;
        this.isAllowOutgoing = true;

        // 默认文本
        if (!this.text?.value) {
            this.text.value = "开始";
            this.text.x = this.x;
            this.text.y = this.y + 30;
        }
    }
}
