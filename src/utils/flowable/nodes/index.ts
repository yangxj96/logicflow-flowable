import { startEventToXml } from "./event/start-event";
import { endEventToXml } from "./event/end-event";
import { userTaskToXml } from "./task/user-task";
import { exclusiveGatewayToXml } from "./gateway/exclusive-gateway";

/**
 * 组件节点转BPMN格式的XML字符串
 * @param node 组件节点
 */
export function nodeToXml(node: any): string {
    switch (node.type) {
        case "bpmn:exclusiveGateway":
            return exclusiveGatewayToXml(node);
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
