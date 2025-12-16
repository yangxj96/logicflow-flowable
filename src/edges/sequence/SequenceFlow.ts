import LogicFlow, {PolylineEdge, PolylineEdgeModel} from '@logicflow/core'

export class SequenceFlowView extends PolylineEdge {
}

export class SequenceFlowModel extends PolylineEdgeModel {
    static type = 'bpmn:sequenceFlow'

    getEdgeStyle() {
        const style = super.getEdgeStyle()
        style.stroke = '#000'
        style.strokeWidth = 1
        return style
    }

    getArrowStyle(): LogicFlow.ArrowTheme {
        return {
            fill: "#000",
            stroke: "#000"
        } as LogicFlow.ArrowTheme
    }
}

export const SequenceFlow = {
    type: SequenceFlowModel.type,
    view: SequenceFlowView,
    model: SequenceFlowModel
}
