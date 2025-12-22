import type { VNode } from "vue";
import type { Property } from "./property";

/**
 * 属性渲染上下文
 */
export type PropertyRendererContext = {
    property: Property;
    value: any;
    onChange: (value: any) => void;
    emit: (event: string, payload?: any) => void;
};

export interface PropertyContext {
    target: any; // nodes / process / anything
    type: "node" | "process";
    onCommit?: () => void;
}

export type PropertyRenderer = (ctx: PropertyRendererContext) => VNode;
