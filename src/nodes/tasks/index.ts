import {LogicFlow} from '@logicflow/core'
import {registerUserTask} from './user-task'

export function registerTaskNodes(lf: LogicFlow) {
    registerUserTask(lf)
}
