import { Property } from "../../../types";
import { CommonNodeProperties } from "../base";

/**
 * 排他网关属性定义
 */
export const ExclusiveGatewayProperties: Property[] = [
    ...CommonNodeProperties,
    {
        key: "default",
        label: "默认连线",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "default"
        }
    }
];
