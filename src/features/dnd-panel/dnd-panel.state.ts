import type LogicFlow from "@logicflow/core";
import { DndState } from "../../types";
import { markRaw, reactive } from "vue";
import { DEFAULT_DND_ITEMS } from "./index";

export function useDndState(lf: LogicFlow): DndState {
    return reactive({
        lf: markRaw(lf),
        nodes: DEFAULT_DND_ITEMS
    });
}
