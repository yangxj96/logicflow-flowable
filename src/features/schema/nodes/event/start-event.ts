import { Property } from "../../types";
import { NODE_TYPE_NAMES, NODE_TYPES } from "../../../../core/constants";

/**
 * 开始四件Schema定义
 */
export const StartEventSchema: Property[] = [
    {
        field: "id",
        label: "ID",
        type: "inline",
        component: "string",
        default: ""
    },
    {
        field: "name",
        label: "名称",
        type: "inline",
        component: "string",
        default: NODE_TYPE_NAMES[NODE_TYPES.START_EVENT]
    },
    {
        field: "document",
        label: "说明",
        type: "children",
        component: "textarea",
        default: ""
    }
];
