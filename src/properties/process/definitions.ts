import { BaseProperty } from "../base";

export const DefinitionsProperties: BaseProperty[] = [
    {
        key: "id",
        label: "Definitions ID",
        type: "string",
        group: "",
        xml: {
            attr: "id"
        }
    },
    {
        key: "targetNamespace",
        label: "命名空间",
        type: "string",
        defaultValue: "http://www.omg.org/spec/BPMN/20100524/MODEL",
        group: "",
        xml: {
            attr: "targetNamespace"
        }
    }
];
