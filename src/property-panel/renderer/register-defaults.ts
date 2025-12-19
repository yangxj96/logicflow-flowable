import {
    registerStringRenderer,
    registerSelectRenderer,
    registerNumberRenderer,
    registerBooleanRenderer
} from "./defaults";

/**
 * 注册插件内置的属性渲染器
 * 只应调用一次
 */
export function registerDefaultPropertyRenderers() {
    registerStringRenderer();
    registerSelectRenderer();
    registerNumberRenderer();
    registerBooleanRenderer();
}
