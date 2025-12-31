import LogicFlow from "@logicflow/core";
import { ValidateResult } from "../types";
import { BehaviorsEngine } from "../behaviors/engine";

/**
 * 发布 / 保存前的强校验入口
 * 有 error → 不可发布
 */
export function validateBeforePublish(lf: LogicFlow): ValidateResult[] {
    const engine = new BehaviorsEngine(lf);
    return engine.validateGraph().filter(r => !r.valid);
}
