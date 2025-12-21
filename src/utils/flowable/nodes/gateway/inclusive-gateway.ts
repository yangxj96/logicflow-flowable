import { attrsToString, buildXmlParts } from "../../utils";
import { InclusiveGatewayProperties } from "../../../../properties/gateways/inclusive-gateway";
import LogicFlow from "@logicflow/core";

/**
 * 包容网关节点转 BPMN XML
 * @param node 节点
 */
export function inclusiveGatewayToXml(node: LogicFlow.NodeData): string {
    const { attrs, elements } = buildXmlParts(node, InclusiveGatewayProperties);

    const attrStr = attrsToString({
        id: node.id,
        name: node.text?.value,
        ...attrs
    });

    if (elements.length) {
        return `<bpmn:inclusiveGateway ${attrStr}>
      ${elements.join("")}
    </bpmn:inclusiveGateway>`;
    }

    return `<bpmn:inclusiveGateway ${attrStr} />`;
}
