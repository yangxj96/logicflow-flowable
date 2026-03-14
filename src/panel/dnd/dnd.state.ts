import type LogicFlow from "@logicflow/core";
import { markRaw, reactive } from "vue";
import { DEFAULT_DND_ITEMS } from "./index";
import { DndState } from "./types";

export function useDndState(lf: LogicFlow): DndState {
    return reactive({
        lf: markRaw(lf),
        nodes: DEFAULT_DND_ITEMS
    });
}
