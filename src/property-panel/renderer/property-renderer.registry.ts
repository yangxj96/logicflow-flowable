import { PropertyRenderer } from "../../types/renderer";

/**
 * 注册了的渲染器
 */
const rendererRegistry = new Map<string, PropertyRenderer>();

/**
 * 注册属性渲染器（后注册会覆盖）
 */
export function registerPropertyRenderer(type: string, renderer: PropertyRenderer) {
    rendererRegistry.set(type, renderer);
}

/**
 * 获取属性渲染器
 */
export function getPropertyRenderer(type: string) {
    return rendererRegistry.get(type);
}
