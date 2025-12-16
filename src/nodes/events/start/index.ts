import { LogicFlow } from '@logicflow/core'
import { StartEventModel } from './model'
import { StartEventView } from './view'

export function registerStartEvent(lf: LogicFlow) {
    lf.register({
        type: StartEventModel.type,
        view: StartEventView,
        model: StartEventModel
    })
}
