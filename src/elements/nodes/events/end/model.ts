import LogicFlow, { CircleNodeModel } from "@logicflow/core";
import { NODE_TYPES } from "../../../../core/constants";

/**
 * 结束事件节点模型
 */
export class EndEventModel extends CircleNodeModel {
    static readonly type = NODE_TYPES.END_EVENT;

    constructor(data: any, graphModel: any) {
        super(data, graphModel);
        this.r = 26;
    }

    initNodeData(data: LogicFlow.NodeConfig) {
        super.initNodeData(data);
    }

    getNodeStyle() {
        return {
            stroke: "#333",
            strokeWidth: 2,
            fill: "#fff"
        };
    }
}
