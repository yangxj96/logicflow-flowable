import LogicFlow from '@logicflow/core'
import {SequenceFlowModel} from './model'
import {SequenceFlowView} from './view'

export function registerSequenceEdges(lf: LogicFlow) {
    lf.register({
        type: SequenceFlowModel.type,
        model: SequenceFlowModel,
        view: SequenceFlowView
    })
}
