import LogicFlow, { CircleNodeModel } from "@logicflow/core";
import { NODE_TYPES } from "../../../../core/constants";

/**
 * 开始事件节点模型
 */
export class StartEventModel extends CircleNodeModel {
    static readonly type = NODE_TYPES.START_EVENT;

    constructor(data: any, graphModel: any) {
        super(data, graphModel);
        // StartEvent 固定大小
        this.r = 26;
    }

    initNodeData(data: LogicFlow.NodeConfig) {
        super.initNodeData(data);
        this.id = this.id.toUpperCase();
        this.properties = {
            // id: BpmnIdGenerator.generate(),
            id: this.id,
            name: "测试"
        };
    }

    getNodeStyle() {
        return {
            stroke: "#333",
            strokeWidth: 1,
            fill: "#fff"
        };
    }
}
