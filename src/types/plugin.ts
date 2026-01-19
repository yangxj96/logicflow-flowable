/**
 * 插件配置选项
 */
export interface FlowablePluginOptions {
    dndPanel?: {
        /**
         * 是否弃用
         */
        enabled?: boolean;
        /**
         * 容器
         */
        container?: HTMLElement;
    };
    propertyPanel?: {
        enabled?: boolean;
        /**
         * 容器
         */
        container?: HTMLElement;
        /**
         * 是否注册内置属性渲染器
         */
        defaultRenderers?: boolean;
    };
}

/**
 * 插件配置选项,这个是内部用的,主要是内部使用的时候进行了默认值覆盖,就是说绝对是有值的,避免导出是?这些
 */
export interface ResolvedFlowableOptions {
    dndPanel: {
        enabled: boolean;
        container?: HTMLElement;
    };
    propertyPanel: {
        enabled: boolean;
        container?: HTMLElement;
        defaultRenderers: boolean;
    };
}
