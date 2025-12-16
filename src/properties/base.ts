export interface BaseProperty {
    key: string
    label: string
    type: 'string' | 'number' | 'boolean' | 'select'
    required?: boolean
    defaultValue?: any
}
