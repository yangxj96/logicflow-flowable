import { Property } from "../../../types";
import { CommonNodeProperties } from "../base";

/**
 * 包容网关属性定义
 */
export const InclusiveGatewayProperties: Property[] = [
    ...CommonNodeProperties,
    {
        key: "defaultFlow",
        label: "默认连线",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "default"
        }
    }
];
