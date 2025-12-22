import LogicFlow, { CircleNodeModel } from "@logicflow/core";
import { NODE_TYPES } from "../../../core/constants";
import { BpmnIdGenerator } from "../../../utils/id-generator";
import { StartEventProperties } from "../../../properties/events/start";
import { BehaviorsBase, NodeBehavior } from "../../../types";
import { StartEventBehavior } from "../../../behaviors/nodes/events/start-event";

/**
 * 开始事件节点模型
 */
export class StartEventModel extends CircleNodeModel implements BehaviorsBase {

    static readonly type = NODE_TYPES.START_EVENT;

    getBehavior(): NodeBehavior {
        return StartEventBehavior;
    }

    constructor(data: any, graphModel: any) {
        super(data, graphModel);

        // StartEvent 固定大小
        this.r = 26;

        // 语义约束
        this.isAllowIncoming = false;
        this.isAllowOutgoing = true;
    }

    initNodeData(data: LogicFlow.NodeConfig) {
        super.initNodeData(data);

        let bpmnId = BpmnIdGenerator.generate();
        this.id = bpmnId;
        this.text.value = "开始";

        // 初始化 properties（非常关键）
        this.properties = {};
        StartEventProperties.forEach(prop => {
            this.properties[prop.key] = "";
            if (prop.key === "id") {
                this.properties[prop.key] = bpmnId;
            }
            if (prop.key === "name") {
                this.properties[prop.key] = "开始";
            }
        });

        // 默认文本
        if (!this.text?.value) {
            this.text.value = "开始";
            this.text.x = this.x;
            this.text.y = this.y + 4;
        }
    }

    getNodeStyle() {
        return {
            stroke: "#333",
            strokeWidth: 1,
            fill: "#fff"
        };
    }
}
