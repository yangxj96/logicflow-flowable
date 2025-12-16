import { RectNodeModel } from '@logicflow/core'
import {BPMN_PREFIX} from "../../../core/constants";

export class UserTaskModel extends RectNodeModel {
    static readonly type = `${BPMN_PREFIX}:userTask`

    constructor(data: any, graphModel: any) {
        super(data, graphModel)

        // BPMN UserTask 标准尺寸
        this.width = 110
        this.height = 50
        this.radius = 8

        // 允许连入 / 连出
        this.isAllowIncoming = true
        this.isAllowOutgoing = true

        // 初始化 properties（非常关键）
        this.properties = {
            assignee: '',
            candidateUsers: '',
            candidateGroups: '',
            formKey: '',
            dueDate: ''
        }

        // 默认文本
        if (!this.text || !this.text.value) {
            this.text.value = '用户任务'
            this.text.x = this.x
            this.text.y = this.y + 4
        }
    }
}
