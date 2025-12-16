import type {NodePropertyDefinition} from './types'

const registry = new Map<string, NodePropertyDefinition>()

export function registerNodeProperties(def: NodePropertyDefinition) {
    registry.set(def.type, def)
}

export function getNodeProperties(type: string) {
    return registry.get(type)
}
