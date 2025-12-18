import type LogicFlow from "@logicflow/core";
import { BpmnIdGenerator } from "../utils/id-generator";

export const PROCESS_CONTEXT = Symbol("logicflow-flowable:process");

export interface ProcessModel {
    id: string;
    name: string;
    isExecutable: boolean;
}

export function initProcessContext(lf: LogicFlow) {
    if ((lf as any)[PROCESS_CONTEXT]) return;

    (lf as any)[PROCESS_CONTEXT] = {
        id: BpmnIdGenerator.generate("PROCESS"),
        name: "新建流程",
        isExecutable: true
    } satisfies ProcessModel;
}

export function getProcessContext(lf: LogicFlow): ProcessModel {
    const ctx = (lf as any)[PROCESS_CONTEXT];
    if (!ctx) {
        throw new Error("[flowable] process context not initialized");
    }
    return ctx;
}
