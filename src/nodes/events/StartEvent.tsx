import {
    CircleNode,
    CircleNodeModel
} from '@logicflow/core'

export class StartEventView extends CircleNode {
}

export class StartEventModel extends CircleNodeModel {
    static type = 'bpmn:startEvent'

    initNodeData(data: any) {
        super.initNodeData(data)
        this.r = 18
        this.text.value = '开始'
        this.properties = {}
    }

    getNodeStyle() {
        const style = super.getNodeStyle()
        style.stroke = '#000'
        style.strokeWidth = 1
        style.fill = '#fff'
        return style
    }
}

export const StartEvent = {
    type: StartEventModel.type,
    view: StartEventView,
    model: StartEventModel
}
