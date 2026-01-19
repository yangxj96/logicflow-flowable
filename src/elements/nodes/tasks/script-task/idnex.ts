import { LogicFlow } from "@logicflow/core";
import { ScriptTaskModel } from "./model";
import { ScriptTaskView } from "./view";

/**
 * 注册脚本任务节点
 *
 * @param lf {@link LogicFlow} 实例对象
 */
export function registerScriptTask(lf: LogicFlow) {
    lf.register({
        type: ScriptTaskModel.type,
        model: ScriptTaskModel,
        view: ScriptTaskView
    });
}
