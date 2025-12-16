import { LogicFlow } from '@logicflow/core'
import { UserTaskModel } from './model'
import { UserTaskView } from './view'

export function registerUserTask(lf: LogicFlow) {
    lf.register({
        type: UserTaskModel.type,
        model: UserTaskModel,
        view: UserTaskView
    })
}
