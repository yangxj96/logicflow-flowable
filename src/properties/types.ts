export type PropertySchema = {
    key: string
    label: string
    type: 'string' | 'number' | 'boolean'
    placeholder?: string
}

export type NodePropertyDefinition = {
    type: string
    properties: PropertySchema[]
}
