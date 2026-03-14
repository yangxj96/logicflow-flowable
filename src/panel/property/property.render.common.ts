import { h } from "vue";
import { ElCard } from "element-plus";

/**
 * 渲染公共卡片
 * @param title 标题
 * @param content 内容渲染函数
 */
export function renderCommonCard(title: string, content?: () => any) {
    return h(
        ElCard,
        {
            shadow: "never",
            style: {
                width: "100%",
                height: "100%",
                border: "none"
            }
        },
        {
            header: () => h("span", { style: { fontWeight: 600 } }, title),
            default: content
        }
    );
}

/**
 * 渲染异常卡片
 * @param title 标题
 * @param tip 提示
 */
export function renderErrorCard(title: string, tip: string) {
    return renderCommonCard(title, () =>
        h(
            "div",
            {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%"
                }
            },
            tip
        )
    );
}
