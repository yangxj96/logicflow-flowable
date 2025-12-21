import { attrsToString, buildXmlParts } from "../../utils";
import { ScriptTaskProperties } from "../../../../properties/tasks/script-task";
import LogicFlow from "@logicflow/core";

/**
 * 脚本任务节点转BPMN格式的XML字符串
 * @param node 节点
 */
export function scriptTaskToXml(node: LogicFlow.NodeData): string {
    const { attrs, elements } = buildXmlParts(node, ScriptTaskProperties);

    const attrStr = attrsToString({
        id: node.id,
        name: node.text?.value,
        ...attrs
    });

    if (elements.length) {
        return `<bpmn:scriptTask${attrStr}>
      ${elements.join("")}
    </bpmn:scriptTask>`;
    }

    return `<bpmn:scriptTask${attrStr} />`;
}
