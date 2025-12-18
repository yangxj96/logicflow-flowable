import { BaseProperty } from "../../types";
import { CommonNodeProperties } from "../base";


export const ExclusiveGatewayProperties: BaseProperty[] = [
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
    },
]
