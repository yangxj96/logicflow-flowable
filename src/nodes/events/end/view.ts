import { CircleNode, h } from "@logicflow/core";

/**
 * 结束事件节点视图
 */
export class EndEventView extends CircleNode {
    getShape() {
        const { x, y, r } = this.props.model;

        return h("g", {}, [
            // 外圈
            h("circle", {
                cx: x,
                cy: y,
                r,
                stroke: "#333",
                strokeWidth: 2,
                fill: "#fff"
            }),
            // 内圈
            h("circle", {
                cx: x,
                cy: y,
                r: r - 4,
                stroke: "#333",
                strokeWidth: 1,
                fill: "none"
            })
        ]);
    }
}
