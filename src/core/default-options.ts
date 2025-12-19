import { FlowablePluginOptions, ResolvedFlowableOptions } from "../types/plugin";

export const DEFAULT_FLOWABLE_PLUGIN_OPTIONS = {
    propertyPanel: {
        defaultRenderers: true
    }
} as const;


/**
 * 解析并合并 Flowable 插件配置
 * - 保证返回完整配置
 * - 允许 rawOptions 为 any / undefined
 */
export function resolveFlowableOptions(rawOptions?: any): ResolvedFlowableOptions {
    const user = rawOptions as FlowablePluginOptions | undefined;

    return {
        propertyPanel: {
            defaultRenderers:
                user?.propertyPanel?.defaultRenderers ??
                DEFAULT_FLOWABLE_PLUGIN_OPTIONS.propertyPanel.defaultRenderers
        }
    };
}
