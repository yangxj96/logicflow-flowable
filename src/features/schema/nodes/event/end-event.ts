import { BaseSchema } from "../../base";
import { Property } from "../../types";

export const EndEventSchema: Property[] = [
    ...BaseSchema,
    {
        field: "timerEventDefinition",
        label: "定时启动",
        type: "children",
        component: "boolean"
    },
    {
        field: "errorEventDefinition",
        label: "错误事件",
        type: "children",
        component: "boolean"
    },
    {
        field: "flowable:extensionElements",
        label: "执行监听器",
        type: "children",
        component: "boolean"
    },
    {
        field: "document",
        label: "说明",
        type: "children",
        component: "textarea"
    }
];
