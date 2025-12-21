import { CommonNodeProperties } from "../base";
import { Property } from "../../types";

/**
 * 用户任务节点属性
 */
export const ReceiveTaskProperties: Property[] = [
    ...CommonNodeProperties,
    {
        key: "messageRef",
        label: "关联消息",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "bpmn:messageRef"
        }
    }
];
