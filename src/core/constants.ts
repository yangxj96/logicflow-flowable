/*--------------BPMN前缀--------------*/

// BPMN前缀

export const BPMN_PREFIX = `bpmn` as const;

/**
 * BPMN node type 构建
 */
const bpmn = <T extends string>(name: T) => `${BPMN_PREFIX}:${name}` as const;

/**
 * 支持的所有BPMN节点
 */
export const NODE_TYPES = {
    /*--------------连线--------------*/
    SEQUENCE_FLOW: bpmn("sequenceFlow"),

    /*--------------任务--------------*/
    // 接收任务
    RECEIVE_TASK: bpmn("receiveTask"),
    // 脚本任务
    SCRIPT_TASK: bpmn("scriptTask"),
    // 服务任务
    SERVICE_TASK: bpmn("serviceTask"),
    // 用户任务
    USER_TASK: bpmn("userTask"),

    /*--------------事件--------------*/
    // 开始事件
    START_EVENT: bpmn("startEvent"),
    // 结束事件
    END_EVENT: bpmn("endEvent"),

    /*--------------网关--------------*/
    // 排他网关
    EXCLUSIVE_GATEWAY: bpmn("exclusiveGateway"),
    // 包容网关
    INCLUSIVE_GATEWAY: bpmn("inclusiveGateway"),
    // 并行网关
    PARALLEL_GATEWAY: bpmn("parallelGateway"),

    /*--------------特殊处理--------------*/
    // 流程定义
    PROCESS: bpmn("process")
} as const;
