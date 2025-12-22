import LogicFlow, { CircleNodeModel } from "@logicflow/core";
import { NODE_TYPES } from "../../../core/constants";
import { BpmnIdGenerator } from "../../../utils/id-generator";
import { EndEventProperties } from "../../../properties/events/end";
import { EndEventBehavior } from "../../../behaviors/nodes/events/end-event";
import { BehaviorsBase, NodeBehavior } from "../../../types";

/**
 * 结束事件节点模型
 */
export class EndEventModel extends CircleNodeModel implements BehaviorsBase {
    static readonly type = NODE_TYPES.END_EVENT;

    getBehavior(): NodeBehavior {
        return EndEventBehavior;
    }

    constructor(data: any, graphModel: any) {
        super(data, graphModel);

        //  固定大小
        this.r = 26;

        // 语义约束
        this.isAllowIncoming = true;
        this.isAllowOutgoing = false;
    }

    initNodeData(data: LogicFlow.NodeConfig) {
        super.initNodeData(data);

        let bpmnId = BpmnIdGenerator.generate();
        this.id = bpmnId;
        this.text.value = "结束";

        // 初始化 properties（非常关键）
        this.properties = {};
        EndEventProperties.forEach(prop => {
            this.properties[prop.key] = "";
            if (prop.key === "id") {
                this.properties[prop.key] = bpmnId;
            }
            if (prop.key === "name") {
                this.properties[prop.key] = "结束";
            }
        });

        // 默认文本
        if (!this.text?.value) {
            this.text.value = "结束";
            this.text.x = this.x;
            this.text.y = this.y + 4;
        }
    }

    getNodeStyle() {
        return {
            stroke: "#333",
            strokeWidth: 2,
            fill: "#fff"
        };
    }
}
