import LogicFlow from "@logicflow/core";
import { BpmnIdGenerator } from "../../../utils/id-generator";
import { UserTaskProperties } from "../../../properties/tasks/user-task";
import { NODE_TYPES } from "../../../core/constants";
import { TaskBaseModel } from "../task-base-model";
import { BehaviorsBase, NodeBehavior } from "../../../types";
import { ScriptTaskBehavior } from "../../../behaviors/nodes/tasks/script-task";

/**
 * 脚本任务模型
 */
export class ScriptTaskModel extends TaskBaseModel implements BehaviorsBase {

    static readonly type = NODE_TYPES.SCRIPT_TASK;

    getBehavior(): NodeBehavior {
        return ScriptTaskBehavior;
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
