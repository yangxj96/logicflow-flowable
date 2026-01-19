import { FlowablePluginOptions, ResolvedFlowableOptions } from "../types/plugin";

/**
 * Flowable 插件默认配置
 */
export const DEFAULT_FLOWABLE_PLUGIN_OPTIONS: ResolvedFlowableOptions = {
    dndPanel: {
        enabled: true,
        container: undefined
    },
    propertyPanel: {
        enabled: true,
        container: undefined,
        defaultRenderers: true
    }
};

/**
 * 解析并合并 Flowable 插件配置
 * - 保证返回完整配置
 * - 允许 rawOptions 为 any / undefined
 */
export function resolveFlowableOptions(rawOptions?: FlowablePluginOptions): ResolvedFlowableOptions {
    const user = rawOptions ?? {};

    return {
        dndPanel: {
            enabled:
                user.dndPanel?.enabled
                ?? DEFAULT_FLOWABLE_PLUGIN_OPTIONS.propertyPanel.enabled,
            container:
                user.dndPanel?.container
                ?? DEFAULT_FLOWABLE_PLUGIN_OPTIONS.dndPanel.container
        },
        propertyPanel: {
            enabled:
                user.propertyPanel?.enabled
                ?? DEFAULT_FLOWABLE_PLUGIN_OPTIONS.propertyPanel.enabled,

            container:
                user.propertyPanel?.container
                ?? DEFAULT_FLOWABLE_PLUGIN_OPTIONS.propertyPanel.container,

            defaultRenderers:
                user.propertyPanel?.defaultRenderers
                ?? DEFAULT_FLOWABLE_PLUGIN_OPTIONS.propertyPanel.defaultRenderers
        }
    };
}
