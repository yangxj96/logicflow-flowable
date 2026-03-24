import LogicFlow, { CircleNodeModel } from "@logicflow/core";
import { NODE_TYPE_NAMES, NODE_TYPES } from "../../../../core/constants";
import { Property, PropertyMethod } from "../../../../features/schema/types";
import { StartEventSchema } from "../../../../features/schema/nodes/event/start-event";
import { BpmnIdGenerator } from "../../../../helper/id-generator";

/**
 * 开始事件节点模型
 */
export class StartEventModel extends CircleNodeModel implements PropertyMethod {
    static readonly type = NODE_TYPES.START_EVENT;

    getSchemas(): Property[] {
        return StartEventSchema;
    }

    constructor(data: any, graphModel: any) {
        super(data, graphModel);
        this.r = 26;
    }

    initNodeData(data: LogicFlow.NodeConfig) {
        super.initNodeData(data);

        // 初始化赋值
        data.id = BpmnIdGenerator.generate();
        data.text = NODE_TYPE_NAMES[this.type];

        // form构建
        const schemas = this.getSchemas();
        const form: { [key: string]: any } = {};
        for (const schema of schemas) {
            if (schema.field === "id") {
                form[schema.field] = data.id;
                continue;
            }
            if (schema.field === "name") {
                form[schema.field] = data.text;
                continue;
            }
            form[schema.field] = schema.default;
        }

        // 赋值
        data.properties ??= {};
        data.properties["form"] = form;
        data.properties["schemas"] = schemas;
        data.properties["rules"] = {};
    }

    getNodeStyle() {
        return {
            stroke: "#333",
            strokeWidth: 1,
            fill: "#fff"
        };
    }
}
