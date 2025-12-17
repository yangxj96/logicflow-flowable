import { attrsToString, buildXmlParts } from "../utils";
import { StartEventProperties } from "../../../properties/events/start";

export function startEventToXml(node: any): string {

    const { attrs, elements } = buildXmlParts(node, StartEventProperties);

    const attrStr = attrsToString({
        id: node.id,
        name: node.text?.value,
        ...attrs
    });

    if (elements.length) {
        return `<bpmn:startEvent${attrStr}>
      ${elements.join("")}
    </bpmn:startEvent>`;
    }

    return `<bpmn:startEvent${attrStr} />`;
}
