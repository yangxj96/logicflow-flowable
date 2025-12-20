import { DiamondNode, h } from "@logicflow/core";

/**
 * 包容网关视图
 */
export class InclusiveGatewayView extends DiamondNode {
    getShape() {
        const { x, y, width, height } = this.props.model;

        return h(
            "g",
            {},
            // 菱形
            h("polygon", {
                points: `${x},${y - height / 2} ${x + width / 2},${y} ${x},${y + height / 2} ${x - width / 2},${y}`,
                fill: "#fff",
                stroke: "#222",
                strokeWidth: 2
            }),
            // 中间 X 标识
            h("line", {
                x1: x - 6,
                y1: y - 6,
                x2: x + 6,
                y2: y + 6,
                stroke: "#222",
                strokeWidth: 2
            }),
            h("line", {
                x1: x + 6,
                y1: y - 6,
                x2: x - 6,
                y2: y + 6,
                stroke: "#222",
                strokeWidth: 2
            })
        );
    }
}
