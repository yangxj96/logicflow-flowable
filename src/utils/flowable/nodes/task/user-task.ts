import { attrsToString, buildXmlParts } from "../../utils";
import LogicFlow from "@logicflow/core";
import { UserTaskProperties } from "../../../../features/properties/tasks/user-task";

/**
 * 用户任务节点转BPMN格式的XML字符串
 * @param node 节点
 */
export function userTaskToXml(node: LogicFlow.NodeData): string {
    const { attrs, elements } = buildXmlParts(node, UserTaskProperties);

    const attrStr = attrsToString({
        id: node.id,
        name: node.text?.value,
        ...attrs
    });

    if (elements.length) {
        return `<bpmn:userTask${attrStr}>
      ${elements.join("")}
    </bpmn:userTask>`;
    }

    return `<bpmn:userTask${attrStr} />`;
}
