import LogicFlow from "@logicflow/core";
import { SequenceFlowModel } from "./model";
import { SequenceFlowView } from "./view";

/**
 * 注册SequenceFlow组件
 *
 * @param lf {@link LogicFlow} 实例对象
 */
export function registerSequenceEdges(lf: LogicFlow) {
    lf.register({
        type: SequenceFlowModel.type,
        model: SequenceFlowModel,
        view: SequenceFlowView
    });
}
