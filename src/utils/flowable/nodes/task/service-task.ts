import { attrsToString, buildXmlParts } from "../../utils";
import { ServiceTaskProperties } from "../../../../properties/tasks/service-task";

/**
 * 服务任务节点转BPMN格式的XML字符串
 * @param node 节点
 */
export function serviceTaskToXml(node: any): string {
    const { attrs, elements } = buildXmlParts(node, ServiceTaskProperties);

    const attrStr = attrsToString({
        id: node.id,
        name: node.text?.value,
        ...attrs
    });

    if (elements.length) {
        return `<bpmn:serviceTask${attrStr}>
      ${elements.join("")}
    </bpmn:serviceTask>`;
    }

    return `<bpmn:serviceTask${attrStr} />`;
}
