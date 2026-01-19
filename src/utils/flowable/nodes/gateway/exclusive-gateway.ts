import { attrsToString, buildXmlParts } from "../../utils";
import LogicFlow from "@logicflow/core";
import { ExclusiveGatewayProperties } from "../../../../features/properties/gateways/exclusive-gateway";

/**
 * 排他网关节点转 BPMN XML
 * @param node 节点
 */
export function exclusiveGatewayToXml(node: LogicFlow.NodeData): string {
    const { attrs, elements } = buildXmlParts(node, ExclusiveGatewayProperties);

    const attrStr = attrsToString({
        id: node.id,
        name: node.text?.value,
        ...attrs
    });

    if (elements.length) {
        return `<bpmn:exclusiveGateway${attrStr}>
      ${elements.join("")}
    </bpmn:exclusiveGateway>`;
    }

    return `<bpmn:exclusiveGateway${attrStr} />`;
}
