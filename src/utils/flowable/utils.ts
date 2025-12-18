import { BaseProperty } from "../../types";

/**
 * 对xml特殊字符串替换转义
 * @param str xml字符串
 */
export function escapeXml(str: string) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * 构建XML节点
 * @param node 节点
 * @param properties 节点的属性
 */
export function buildXmlParts(node: any, properties: BaseProperty[]): { attrs: Record<string, string>; elements: string[] } {
    const attrs: Record<string, string> = {};
    const elements: string[] = [];
    const values = node.properties || {};

    for (const prop of properties) {
        const xml = prop.xml;
        if (!xml) continue;

        const value = values[prop.key];

        // 跳过无效值
        if (value === undefined || value === null || value === "") continue;

        /** attribute */
        if (xml.attr) {
            const attrName = xml.namespace ? `${xml.namespace}:${xml.attr}` : xml.attr;

            attrs[attrName] = String(value);
        }

        /** element（boolean 表示存在即可） */
        if (xml.element && value === true) {
            const elementName = xml.namespace ? `${xml.namespace}:${xml.element}` : xml.element;

            elements.push(`<${elementName} />`);
        }

        /** element + value（字符串子节点，预留） */
        if (xml.element && typeof value === "string" && value !== "") {
            const elementName = xml.namespace ? `${xml.namespace}:${xml.element}` : xml.element;

            elements.push(`<${elementName}>${escapeXml(value)}</${elementName}>`);
        }
    }

    return { attrs, elements };
}

/**
 * attr转字符串
 * @param attrs attrs
 */
export function attrsToString(attrs: Record<string, any> = {}): string {
    return Object.entries(attrs)
        .filter(([, value]) => value !== undefined && value !== null && value !== "")
        .map(([key, value]) => {
            if (typeof value === "boolean") {
                return ` ${key}="${value ? "true" : "false"}"`;
            }
            return ` ${key}="${escapeXml(String(value))}"`;
        })
        .join("");
}
