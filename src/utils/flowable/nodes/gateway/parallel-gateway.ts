import { attrsToString, buildXmlParts } from "../../utils";
import { ParallelGatewayProperties } from "../../../../properties/gateways/parallel-gateway";
import LogicFlow from "@logicflow/core";

/**
 * 并行网关节点转 BPMN XML
 * @param node 节点
 */
export function parallelGatewayToXml(node: LogicFlow.NodeData): string {
    const { attrs, elements } = buildXmlParts(node, ParallelGatewayProperties);

    const attrStr = attrsToString({
        id: node.id,
        name: node.text?.value,
        ...attrs
    });

    if (elements.length) {
        return `<bpmn:parallelGateway ${attrStr}>
      ${elements.join("")}
    </bpmn:parallelGateway>`;
    }

    return `<bpmn:parallelGateway ${attrStr} />`;
}
