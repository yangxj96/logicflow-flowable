import { BaseSchema } from "../../base";
import { Property } from "../../types";

export const UserTaskSchema: Property[] = [
    ...BaseSchema,
    {
        field: "flowable:assignee",
        label: "指定人",
        type: "inline",
        component: "string"
    },
    {
        field: "flowable:candidateUsers",
        label: "候选人",
        type: "inline",
        component: "string"
    },
    {
        field: "flowable:candidateGroups",
        label: "候选组",
        type: "inline",
        component: "string"
    },
    {
        field: "flowable:formKey",
        label: "表单key",
        type: "inline",
        component: "string"
    },
    {
        field: "flowable:priority",
        label: "优先级",
        type: "inline",
        component: "string"
    },
    {
        field: "document",
        label: "说明",
        type: "children",
        component: "textarea"
    }
];
