import {BaseEdgeModel} from '@logicflow/core'
import {BPMN_PREFIX} from "../../core/constants";

export class SequenceFlowModel extends BaseEdgeModel {
    static readonly type = `${BPMN_PREFIX}:sequenceFlow`

    constructor(data: any, graphModel: any) {
        super(data, graphModel)

        // 默认属性，放条件表达式
        this.properties = {
            conditionExpression: ''
        }

        // SequenceFlow 允许连入、连出
        this.isAllowIncoming = true
        this.isAllowOutgoing = true
    }
}
