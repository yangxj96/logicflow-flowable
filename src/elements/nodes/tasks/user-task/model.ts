import LogicFlow from "@logicflow/core";
import { TaskBaseModel } from "../task-base-model";
import { NodeBehavior, NodeCap, PropertyBase } from "../../../../types";
import { NODE_TYPES } from "../../../../core/constants";
import { UserTaskBehavior } from "../../../../features/behaviors/nodes/tasks/user-task";
import { BpmnIdGenerator } from "../../../../utils/id-generator";
import { UserTaskProperties } from "../../../../features/properties/tasks/user-task";

/**
 * 用户任务模型
 */
export class UserTaskModel extends TaskBaseModel implements NodeCap {
    static readonly type = NODE_TYPES.USER_TASK;

    getNodeProperties(): PropertyBase[] {
        return UserTaskProperties;
    }

    getBehavior(): NodeBehavior {
        return UserTaskBehavior;
    }

    initNodeData(data: LogicFlow.NodeConfig) {
        super.initNodeData(data);

        let bpmnId = BpmnIdGenerator.generate();
        this.id = bpmnId;
        this.text.value = "用户任务";

        // 初始化 properties（非常关键）
        this.properties = {};
        this.getNodeProperties().forEach(prop => {
            this.properties[prop.key] = "";
            if (prop.key === "id") {
                this.properties[prop.key] = bpmnId;
            }
            if (prop.key === "name") {
                this.properties[prop.key] = "用户任务";
            }
        });

        // 默认文本
        if (!this.text?.value) {
            this.text.value = "用户任务";
            this.text.x = this.x;
            this.text.y = this.y + 4;
        }
    }
}
