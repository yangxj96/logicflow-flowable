import { attrsToString, buildXmlParts } from "../utils";
import { UserTaskProperties } from "../../../properties/tasks/user-task";

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
