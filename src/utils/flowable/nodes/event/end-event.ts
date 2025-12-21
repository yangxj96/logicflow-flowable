import { attrsToString, buildXmlParts } from "../../utils";
import { EndEventProperties } from "../../../../properties/events/end";
import LogicFlow from "@logicflow/core";

/**
 * 结束事件节点转BPMN格式的XML字符串
 * @param node 节点
 */
export function endEventToXml(node: LogicFlow.NodeData): string {
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
