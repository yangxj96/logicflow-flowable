/*
 * logicflow-flowable v0.1.0
 * Copyright 2025 Yang XJ. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import FlowablePlugin from "./core";

/**
 * 基于 LogicFlow 的 BPMN 2.0 流程图可视化与建模插件，无缝对接 Flowable 工作流引擎。
 *
 * @example
 * import Flowable from '@yangxj96/logicflow-flowable';
 * LogicFlow.use(Flowable.Plugin);
 *
 * @property {object} Plugin - LogicFlow 插件本体，用于注册到 LogicFlow 实例
 */
const Flowable = {
    Plugin: FlowablePlugin
};

export default Flowable;
