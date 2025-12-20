import { NODE_TYPES } from "../../../core/constants";
import { startEventToXml } from "./event/start-event";
import { endEventToXml } from "./event/end-event";
import { userTaskToXml } from "./task/user-task";
import { exclusiveGatewayToXml } from "./gateway/exclusive-gateway";
import { receiveTaskToXml } from "./task/receive-task";
import { scriptTaskToXml } from "./task/script-task";
import { serviceTaskToXml } from "./task/service-task";
import { inclusiveGatewayToXml } from "./gateway/inclusive-gateway";
import { parallelGatewayToXml } from "./gateway/parallel-gateway";

/**
 * 组件节点转BPMN格式的XML字符串
 * @param node 组件节点
 */
export function nodeToXml(node: any): string {
    switch (node.type) {
        // 网关
        case NODE_TYPES.EXCLUSIVE_GATEWAY: // 排他网关
            return exclusiveGatewayToXml(node);
        case NODE_TYPES.INCLUSIVE_GATEWAY: // 包容网关
            return inclusiveGatewayToXml(node);
        case NODE_TYPES.PARALLEL_GATEWAY: // 并行网关
            return parallelGatewayToXml(node);

        // 事件
        case NODE_TYPES.START_EVENT: // 开始事件
            return startEventToXml(node);
        case NODE_TYPES.END_EVENT: // 结束事件
            return endEventToXml(node);

        // 任务
        case NODE_TYPES.RECEIVE_TASK: // 接收任务
            return receiveTaskToXml(node);
        case NODE_TYPES.SCRIPT_TASK: // 脚本任务
            return scriptTaskToXml(node);
        case NODE_TYPES.SERVICE_TASK: // 服务任务
            return serviceTaskToXml(node);
        case NODE_TYPES.USER_TASK: // 用户任务
            return userTaskToXml(node);
        default:
            return "";
    }
}
