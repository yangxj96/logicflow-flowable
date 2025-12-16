import {BaseProperty} from '../Base'

/**
 * 用户服务Properties
 */
export const UserTaskProperties: BaseProperty[] = [
    {
        key: 'assignee',
        label: '处理人',
        type: 'string'
    },
    {
        key: 'candidateUsers',
        label: '候选用户',
        type: 'string'
    },
    {
        key: 'candidateGroups',
        label: '候选组',
        type: 'string'
    },
    {
        key: 'formKey',
        label: '表单 Key',
        type: 'string'
    }
]
