import { startEventToXml } from "./event/start-event";
import { endEventToXml } from "./event/end-event";
import { userTaskToXml } from "./task/user-task";
import { exclusiveGatewayToXml } from "./gateway/exclusive-gateway";
import { receiveTaskToXml } from "./task/receive-task";
import { scriptTaskToXml } from "./task/script-task";
import { serviceTaskToXml } from "./task/service-task";

/**
 * 组件节点转BPMN格式的XML字符串
 * @param node 组件节点
 */
export function nodeToXml(node: any): string {
    switch (node.type) {
        // 网关
        case "bpmn:exclusiveGateway":
            return exclusiveGatewayToXml(node);
        // 事件
        case "bpmn:startEvent":
            return startEventToXml(node);
        case "bpmn:endEvent":
            return endEventToXml(node);
        // 任务
        case "bpmn:receiveTask":
            return receiveTaskToXml(node);
        case "bpmn:scriptTask":
            return scriptTaskToXml(node);
        case "bpmn:serviceTask":
            return serviceTaskToXml(node);
        case "bpmn:userTask":
            return userTaskToXml(node);
        default:
            return "";
    }
}
