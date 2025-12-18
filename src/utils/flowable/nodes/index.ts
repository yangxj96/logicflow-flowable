import { startEventToXml } from "./start-event";
import { userTaskToXml } from "./user-task";
import { endEventToXml } from "./end-event";

/**
 * 组件节点转BPMN格式的XML字符串
 * @param node 组件节点
 */
export function nodeToXml(node: any): string {
    switch (node.type) {
        case "bpmn:startEvent":
            return startEventToXml(node);
        case "bpmn:userTask":
            return userTaskToXml(node);
        case "bpmn:endEvent":
            return endEventToXml(node);
        default:
            return "";
    }
}
