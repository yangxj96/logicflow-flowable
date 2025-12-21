import type { BaseProperty } from "./common";

/**
 * 属性渲染上下文
 */
export type PropertyRendererContext = {
    property: BaseProperty;
    value: any;
    onChange: (value: any) => void;
    emit: (event: string, payload?: any) => void;
};

export interface PropertyContext {
    target: any; // node / process / anything
    type: "node" | "process";
    onCommit?: () => void;
}
