import LogicFlow from "@logicflow/core";
import { registerStartEvent } from "./start";
import { registerEndEvent } from "./end";

export function registerEventNodes(lf: LogicFlow) {
    registerStartEvent(lf);
    registerEndEvent(lf);
}
