import { GatewayBaseView } from "../gateway-base-view";
import { h } from "@logicflow/core";

/**
 * 排他网关视图
 */
export class ExclusiveGatewayView extends GatewayBaseView {

    protected renderInnerIcon(x: number, y: number, size: number, strokeColor: string, strokeWidth: number) {
        const half = size / 2;

        return h("g", {}, [
            h("line", {
                x1: x - half,
                y1: y - half,
                x2: x + half,
                y2: y + half,
                stroke: strokeColor,
                strokeWidth,
                strokeLinecap: "round"
            }),
            h("line", {
                x1: x + half,
                y1: y - half,
                x2: x - half,
                y2: y + half,
                stroke: strokeColor,
                strokeWidth,
                strokeLinecap: "round"
            })
        ]);
    }

}
