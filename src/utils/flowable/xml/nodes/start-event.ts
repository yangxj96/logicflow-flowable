import { attrs } from '../utils'

export function startEventToXml(node: any): string {
    return `<bpmn:startEvent${attrs({
        id: node.id,
        name: node.text?.value
    })} />`
}
