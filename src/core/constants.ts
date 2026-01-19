/**
 * 插件名称
 */
export const PLUGIN_NAME = "flowable";

/**
 * BPMN前缀
 */
export const BPMN_PREFIX = `bpmn` as const;


/**
 * BPMN nodes type 构建
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

/**
 * 节点图标
 */
export const NODE_ICONS = {
    /*--------------事件--------------*/
    START_EVENT:
        "data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\
<circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\
</svg>",

    END_EVENT:
        "data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\
<circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"/>\
</svg>",

    /*--------------任务--------------*/
    RECEIVE_TASK:
        "data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\
<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\" ry=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\
<polyline points=\"3,7 12,13 21,7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\
</svg>",

    SCRIPT_TASK:
        "data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\
<rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2\" ry=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\
<line x1=\"8\" y1=\"8\" x2=\"16\" y2=\"8\" stroke=\"currentColor\" stroke-width=\"2\"/>\
<line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\" stroke=\"currentColor\" stroke-width=\"2\"/>\
</svg>",

    SERVICE_TASK:
        "data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\
<circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\
<path d=\"M12 2v4M12 18v4M2 12h4M18 12h4\" stroke=\"currentColor\" stroke-width=\"2\"/>\
</svg>",

    USER_TASK:
        "data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\
<circle cx=\"12\" cy=\"8\" r=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\
<path d=\"M4 21c0-4 16-4 16 0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\
</svg>",

    /*--------------网关--------------*/
    EXCLUSIVE_GATEWAY:
        "data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\
<polygon points=\"12,3 21,12 12,21 3,12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\
<line x1=\"8\" y1=\"8\" x2=\"16\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"2\"/>\
<line x1=\"16\" y1=\"8\" x2=\"8\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"2\"/>\
</svg>",

    INCLUSIVE_GATEWAY:
        "data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\
<polygon points=\"12,3 21,12 12,21 3,12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\
<circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\
</svg>",

    PARALLEL_GATEWAY:
        "data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\
<polygon points=\"12,3 21,12 12,21 3,12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\
<line x1=\"12\" y1=\"7\" x2=\"12\" y2=\"17\" stroke=\"currentColor\" stroke-width=\"2\"/>\
<line x1=\"7\" y1=\"12\" x2=\"17\" y2=\"12\" stroke=\"currentColor\" stroke-width=\"2\"/>\
</svg>"
} as const;
