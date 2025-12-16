import { startEventToXml } from './start-event'
import { userTaskToXml } from './user-task'
import { endEventToXml } from './end-event'


export function nodeToXml(node: any): string {
    switch (node.type) {
        case 'bpmn:startEvent':
            return startEventToXml(node)
        case 'bpmn:userTask':
            return userTaskToXml(node)
        case 'bpmn:endTask':
            return endEventToXml(node)
        default:
            return ''
    }
}
