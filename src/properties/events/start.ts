import { BaseProperty, CommonNodeProperties } from "../base";

export const StartEventProperties: BaseProperty[] = [
    ...CommonNodeProperties,
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
        key: "async",
        label: "异步执行",
        type: "boolean",
        defaultValue: false,
        group: "扩展信息",
        xml: {
            attr: "flowable:async"
        }
    },
    {
        key: "candidateStarterUsers",
        label: "启动用户",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "flowable:candidateStarterUsers"
        }
    },
    {
        key: "candidateStarterGroups",
        label: "启动用户组",
        type: "string",
        group: "扩展信息",
        xml: {
            attr: "flowable:candidateStarterGroups"
        }
    }
];
