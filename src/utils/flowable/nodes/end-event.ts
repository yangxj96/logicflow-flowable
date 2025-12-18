import { attrsToString, buildXmlParts } from "../utils";
import { EndEventProperties } from "../../../properties/events/end";

export function endEventToXml(node: any): string {
    const { attrs, elements } = buildXmlParts(node, EndEventProperties);

    const attrStr = attrsToString({
        id: node.id,
        name: node.text?.value,
        ...attrs
    });

    if (elements.length) {
        return `<bpmn:endEvent${attrStr}>
      ${elements.join("")}
    </bpmn:endEvent>`;
    }

    return `<bpmn:endEvent${attrStr} />`;
}
