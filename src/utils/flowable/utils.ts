import { BaseProperty } from "../../properties/base";

export function attrs(obj: Record<string, any>) {
    return Object.entries(obj)
        .filter(([, v]) => v !== undefined && v !== "")
        .map(([k, v]) => ` ${k}="${v}"`)
        .join("");
}

export function escapeXml(str: string) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function buildXmlAttrs(node: any, properties: BaseProperty[]): Record<string, any> {
    const attrs: Record<string, any> = {};

    const values = node.properties || {};

    properties.forEach(prop => {
        const xmlAttr = prop.xml?.attr;
        if (!xmlAttr) return;

        const value = values[prop.key];
        if (value !== undefined && value !== "") {
            attrs[xmlAttr] = value;
        }
    });

    return attrs;
}

export function buildXmlParts(
    node: any,
    properties: BaseProperty[]
): { attrs: Record<string, string>; elements: string[] } {
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
