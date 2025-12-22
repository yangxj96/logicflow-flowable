import { GatewayBaseView } from "../gateway-base-view";
import { h } from "@logicflow/core";

/**
 * 并行网关视图
 */
export class ParallelGatewayView extends GatewayBaseView {

    protected renderInnerIcon(x: number, y: number, size: number, strokeColor: string, strokeWidth: number) {
        const half = size / 2;

        return h("g", {}, [
            // 竖线
            h("line", {
                x1: x,
                y1: y - half,
                x2: x,
                y2: y + half,
                stroke: strokeColor,
                strokeWidth,
                strokeLinecap: "round"
            }),
            // 横线
            h("line", {
                x1: x - half,
                y1: y,
                x2: x + half,
                y2: y,
                stroke: strokeColor,
                strokeWidth,
                strokeLinecap: "round"
            })
        ]);
    }

}
