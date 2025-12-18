import { attrsToString, buildXmlParts } from "../utils";
import { UserTaskProperties } from "../../../properties/tasks/user-task";

/**
 * 用户任务节点转BPMN格式的XML字符串
 * @param node 节点
 */
export function userTaskToXml(node: any): string {
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
