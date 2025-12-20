/**
 * 插件配置选项
 */
export interface FlowablePluginOptions {
    propertyPanel?: {
        defaultRenderers?: boolean;
    };
}

/**
 * 插件配置选项,这个是内部用的,主要是内部使用的时候进行了默认值覆盖,就是说绝对是有值的,避免导出是?这些
 */
export interface ResolvedFlowableOptions {
    propertyPanel: {
        defaultRenderers: boolean;
    };
}
