import {BaseProperty} from '../base'

export const UserTaskProperties: BaseProperty[] = [
    {
        key: 'assignee',
        label: '处理人',
        type: 'string'
    },
    {
        key: 'candidateUsers',
        label: '候选用户（逗号分隔）',
        type: 'string'
    },
    {
        key: 'candidateGroups',
        label: '候选组（逗号分隔）',
        type: 'string'
    },
    {
        key: 'formKey',
        label: '表单 Key',
        type: 'string'
    },
    {
        key: 'dueDate',
        label: '到期时间',
        type: 'string'
    }
]
