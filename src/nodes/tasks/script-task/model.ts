import LogicFlow, { RectNodeModel } from "@logicflow/core";
import { BpmnIdGenerator } from "../../../utils/id-generator";
import { UserTaskProperties } from "../../../properties/tasks/user-task";
import { BPMN_PREFIX } from "../../../core/constants";

/**
 * 脚本任务模型
 */
export class ScriptTaskModel extends RectNodeModel {
    static readonly type = `${BPMN_PREFIX}:scriptTask`;

    constructor(data: any, graphModel: any) {
        super(data, graphModel);

        // BPMN Task 标准尺寸
        this.width = 110;
        this.height = 50;
        this.radius = 8;

        // 允许连入 / 连出
        this.isAllowIncoming = true;
        this.isAllowOutgoing = true;
    }

    initNodeData(data: LogicFlow.NodeConfig) {
        super.initNodeData(data);

        let bpmnId = BpmnIdGenerator.generate();
        this.id = bpmnId;
        this.text.value = "脚本任务";

        // 初始化 properties（非常关键）
        this.properties = {};
        UserTaskProperties.forEach(prop => {
            this.properties[prop.key] = "";
            if (prop.key === "id") {
                this.properties[prop.key] = bpmnId;
            }
            if (prop.key === "name") {
                this.properties[prop.key] = "脚本任务";
            }
        });

        // 默认文本
        if (!this.text?.value) {
            this.text.value = "脚本任务";
            this.text.x = this.x;
            this.text.y = this.y + 4;
        }
    }
}
