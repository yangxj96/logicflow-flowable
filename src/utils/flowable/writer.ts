import { nodeToXml } from "./nodes";
import { edgeToXml } from "./edges";
import { processToXml } from "./process";
import { attrs } from "./utils";
import format from "xml-formatter";
import { BpmnIdGenerator } from "../id-generator";

import { BPMN_NS, BPMN_PREFIX, FLOWABLE_NAMESPACE } from "../../core/constants";
import LogicFlow from "@logicflow/core";

const DEFINITIONS_ATTR = {
    [`xmlns:${BPMN_PREFIX}`]: BPMN_NS,
    "xmlns:flowable": FLOWABLE_NAMESPACE,
    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "targetNamespace": "http://www.omg.org/spec/BPMN/20100524/MODEL",
    "id": BpmnIdGenerator.generate("DEFINITIONS")
};

export function toBpmnXml(lf: LogicFlow) {
    const { nodes = [], edges = [] } = lf.getGraphData() as LogicFlow.GraphData;

    const nodeXml = nodes.map(nodeToXml).join("\n");
    const edgeXml = edges.map(edgeToXml).join("\n");

    const body = `    ${nodeXml}\n    ${edgeXml}`;

    const processXml = processToXml(lf, body);

    const xmlStr = `
    <?xml version="1.0" encoding="UTF-8"?>
    <bpmn:definitions${attrs(DEFINITIONS_ATTR)}>
    ${processXml}
    </bpmn:definitions>`;

    return format(xmlStr, {
        indentation: "    ",
        collapseContent: true,
        lineSeparator: "\n"
    });
}
