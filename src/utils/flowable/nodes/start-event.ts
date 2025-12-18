import { attrsToString, buildXmlParts } from "../utils";
import { StartEventProperties } from "../../../properties/events/start";

/**
 * 开始事件节点转BPMN格式的XML字符串
 * @param node 节点
 */
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
