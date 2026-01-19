import { CircleNode, h } from "@logicflow/core";

/**
 * 开始事件节点视图
 */
export class StartEventView extends CircleNode {
    getShape() {
        const { x, y, r } = this.props.model;

        return h("g", {}, [
            h("circle", {
                cx: x,
                cy: y,
                r,
                stroke: "#1B7FFF",
                strokeWidth: 1,
                fill: "#fff"
            })
        ]);
    }
}
