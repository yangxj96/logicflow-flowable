import { attrs } from '../utils'

export function userTaskToXml(node: any): string {
    const {
        assignee,
        candidateUsers,
        candidateGroups,
        formKey,
        dueDate
    } = node.properties || {}

    return `<bpmn:userTask${attrs({
        id: node.id,
        name: node.text?.value,
        'flowable:assignee': assignee,
        'flowable:candidateUsers': candidateUsers,
        'flowable:candidateGroups': candidateGroups,
        'flowable:formKey': formKey,
        'flowable:dueDate': dueDate
    })} />`
}
