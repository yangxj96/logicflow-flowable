import { attrsToString, buildXmlParts } from "../../utils";
import LogicFlow from "@logicflow/core";
import { ReceiveTaskProperties } from "../../../../features/properties/tasks/receive-task";

/**
 * 接收任务节点转BPMN格式的XML字符串
 * @param node 节点
 */
export function receiveTaskToXml(node: LogicFlow.NodeData): string {
    const { attrs, elements } = buildXmlParts(node, ReceiveTaskProperties);

    const attrStr = attrsToString({
        id: node.id,
        name: node.text?.value,
        ...attrs
    });

    if (elements.length) {
        return `<bpmn:receiveTask${attrStr}>
      ${elements.join("")}
    </bpmn:receiveTask>`;
    }

    return `<bpmn:receiveTask${attrStr} />`;
}
