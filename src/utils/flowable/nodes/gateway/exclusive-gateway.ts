import { attrsToString, buildXmlParts } from "../../utils";
import { ExclusiveGatewayProperties } from "../../../../properties/gateways/exclusive-gateway";

/**
 * 排他网关节点转 BPMN XML
 * @param node 节点
 */
export function exclusiveGatewayToXml(node: any): string {
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
