import { escapeXml } from "../utils";

export function sequenceFlowToXml(edge: any): string {
    const { id, sourceNodeId, targetNodeId, properties = {} } = edge;
    const { conditionExpression } = properties;

    // 无条件（普通流转）
    if (!conditionExpression) {
        return `<bpmn:sequenceFlow id="${id}" sourceRef="${sourceNodeId}" targetRef="${targetNodeId}" />`;
    }

    // 条件流转
    return `
<bpmn:sequenceFlow id="${id}" sourceRef="${sourceNodeId}" targetRef="${targetNodeId}">
  <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">
    <![CDATA[ ${escapeXml(conditionExpression)} ]]>
  </bpmn:conditionExpression>
</bpmn:sequenceFlow>`;
}
