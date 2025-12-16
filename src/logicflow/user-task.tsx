import {RectNode, RectNodeModel} from '@logicflow/core'
import { registerNodeProperties } from '../properties/registry'

registerNodeProperties({
    type: 'bpmn:userTask',
    properties: [
        {
            key: 'assignee',
            label: '处理人',
            type: 'string',
            placeholder: '如：admin'
        }
    ]
})

export class UserTaskView extends RectNode {
}

export class UserTaskModel extends RectNodeModel {
    static type = 'bpmn:userTask'

    initNodeData(data: any) {
        super.initNodeData(data)

        this.width = 120
        this.height = 60
        this.text.value = '用户任务'

        // Flowable 关键属性
        this.properties = {
            assignee: ''
        }
    }

    getNodeStyle() {
        const style = super.getNodeStyle()
        style.rx = 6
        style.ry = 6
        style.stroke = '#000'
        style.fill = '#fff'
        return style
    }
}

export const UserTask = {
    type: UserTaskModel.type,
    view: UserTaskView,
    model: UserTaskModel
}
