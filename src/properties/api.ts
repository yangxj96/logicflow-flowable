import type LogicFlow from '@logicflow/core'

export function getNodePropertiesValue(lf: LogicFlow, nodeId: string) {
    const model = lf.getNodeModelById(nodeId)
    return model?.properties || {}
}

export function setNodePropertiesValue(lf: LogicFlow, nodeId: string, values: Record<string, any>) {
    lf.setProperties(nodeId, values)
}
