export interface PaletteItem {
    type: string
    label: string
    icon?: string
}

export const palette: PaletteItem[] = [
    {type: 'bpmn:startEvent', label: '开始'},
    {type: 'bpmn:endEvent', label: '结束'},
    {type: 'bpmn:userTask', label: '用户任务'}
]
