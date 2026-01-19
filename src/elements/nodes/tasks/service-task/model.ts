import LogicFlow from "@logicflow/core";
import { TaskBaseModel } from "../task-base-model";
import { NodeBehavior, NodeCap, PropertyBase } from "../../../../types";
import { NODE_TYPES } from "../../../../core/constants";
import { ServiceTaskBehavior } from "../../../../features/behaviors/nodes/tasks/sevice-task";
import { BpmnIdGenerator } from "../../../../utils/id-generator";
import { ServiceTaskProperties } from "../../../../features/properties/tasks/service-task";

/**
 * 服务任务模型
 */
export class ServiceTaskModel extends TaskBaseModel implements NodeCap {

    static readonly type = NODE_TYPES.SERVICE_TASK;

    getNodeProperties(): PropertyBase[] {
        return ServiceTaskProperties;
    }

    getBehavior(): NodeBehavior {
        return ServiceTaskBehavior;
    }

    initNodeData(data: LogicFlow.NodeConfig) {
        super.initNodeData(data);

        let bpmnId = BpmnIdGenerator.generate();
        this.id = bpmnId;
        this.text.value = "服务任务";

        // 初始化 properties（非常关键）
        this.properties = {};
        this.getNodeProperties().forEach(prop => {
            this.properties[prop.key] = "";
            if (prop.key === "id") {
                this.properties[prop.key] = bpmnId;
            }
            if (prop.key === "name") {
                this.properties[prop.key] = "服务任务";
            }
        });

        // 默认文本
        if (!this.text?.value) {
            this.text.value = "服务任务";
            this.text.x = this.x;
            this.text.y = this.y + 4;
        }
    }
}
