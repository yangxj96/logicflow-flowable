import {LogicFlow} from '@logicflow/core'
import {EndEventModel} from './model'
import {EndEventView} from './view'

export function registerEndEvent(lf: LogicFlow) {
    lf.register({
        type: EndEventModel.type,
        view: EndEventView,
        model: EndEventModel
    })
}
