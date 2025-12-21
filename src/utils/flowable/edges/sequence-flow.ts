import { attrsToString, buildXmlParts } from "../utils";
import { SequenceFlowProperties } from "../../../properties/edges/sequence-flow";
import LogicFlow from "@logicflow/core";

/**
 * SequenceFlow节点转BPMN格式的XML字符串
 * @param edge 节点
 */
export function sequenceFlowToXml(edge: LogicFlow.EdgeData): string {
    const { attrs, elements } = buildXmlParts(edge, SequenceFlowProperties);

    const attrStr = attrsToString({
        id: edge.id,
        name: edge.text?.value,
        ...attrs
    });

    if (elements.length) {
        return `<bpmn:endEvent${attrStr}>
      ${elements.join("")}
    </bpmn:endEvent>`;
    }

    return `<bpmn:sequenceFlow${attrStr} />`;
}
