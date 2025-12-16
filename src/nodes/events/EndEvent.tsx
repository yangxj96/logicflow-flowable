import {CircleNode, CircleNodeModel} from '@logicflow/core'

export class EndEventView extends CircleNode {
}

export class EndEventModel extends CircleNodeModel {
    static type = 'bpmn:endEvent'

    initNodeData(data: any) {
        super.initNodeData(data)
        this.r = 18
        this.text.value = '结束'
        this.properties = {}
    }

    getNodeStyle() {
        const style = super.getNodeStyle()
        style.stroke = '#000'
        style.strokeWidth = 2   // 🔴 EndEvent 比 StartEvent 粗
        style.fill = '#fff'
        return style
    }
}

export const EndEvent = {
    type: EndEventModel.type,
    view: EndEventView,
    model: EndEventModel
}
