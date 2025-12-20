import { BaseProperty } from "../../types";
import { CommonNodeProperties } from "../base";

/**
 * 并行网关属性定义
 */
export const ParallelGatewayProperties: BaseProperty[] = [
    ...CommonNodeProperties,
    {
        key: "defaultFlow",
        label: "默认连线",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "default"
        },
        validate: {
            required: true,
            ruleKey: "flowableAssignee"
        }
    }
];
