import { attrs } from "../utils";

export function endEventToXml(node: any): string {
    return `<bpmn:endEvent${attrs({
        id: node.id,
        name: node.text?.value
    })} />`;
}
