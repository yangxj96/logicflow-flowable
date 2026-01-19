import { RectNodeModel } from "@logicflow/core";

/**
 * 抽象的任务模型
 */
export class TaskBaseModel extends RectNodeModel {
    constructor(data: any, graphModel: any) {
        super(data, graphModel);

        // BPMN UserTask 标准尺寸
        this.width = 120;
        this.height = 70;
        this.radius = 8;

        // 允许连入 / 连出
        this.isAllowIncoming = true;
        this.isAllowOutgoing = true;
    }
}
