import LogicFlow, { CircleNodeModel } from "@logicflow/core";
import { NODE_TYPES } from "../../../../core/constants";
import { BpmnIdGenerator } from "../../../../helper/id-generator";

/**
 * 开始事件节点模型
 */
export class StartEventModel extends CircleNodeModel {
    static readonly type = NODE_TYPES.START_EVENT;

    constructor(data: any, graphModel: any) {
        super(data, graphModel);
        this.r = 26;
    }

    initNodeData(data: LogicFlow.NodeConfig) {
        super.initNodeData(data);
        this.id = BpmnIdGenerator.generate();
        this.properties = {
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
