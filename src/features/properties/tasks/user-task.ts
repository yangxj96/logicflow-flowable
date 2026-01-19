import { CommonNodeProperties } from "../base";
import { Property } from "../../../types";

/**
 * 用户任务节点属性
 */
export const UserTaskProperties: Property[] = [
    ...CommonNodeProperties,
    {
        key: "assignee",
        label: "处理人",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "flowable:assignee"
        },
        ui: {
            rules: {
                ruleKey: "flowable:assignee"
            }
        }
    },
    {
        key: "candidateUsers",
        label: "候选用户（逗号分隔）",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "flowable:candidateUsers"
        }
    },
    {
        key: "candidateGroups",
        label: "候选组（逗号分隔）",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "flowable:candidateGroups"
        }
    },
    {
        key: "formKey",
        label: "表单 Key",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "flowable:formKey"
        }
    },
    {
        key: "dueDate",
        label: "到期时间",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "flowable:dueDate"
        }
    }
];
