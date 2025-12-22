import { GatewayBaseView } from "../gateway-base-view";
import { h } from "@logicflow/core";

/**
 * 包容网关视图
 */
export class InclusiveGatewayView extends GatewayBaseView {
    protected renderInnerIcon(x: number, y: number, size: number, strokeColor: string, strokeWidth: number) {
        const r = size * 0.5;

        return h("circle", {
            cx: x,
            cy: y,
            r,
            fill: "none",
            stroke: strokeColor,
            strokeWidth
        });
    }
}
