import { BaseProperty, XmlElementKind, XmlMeta } from "../../types";

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
export function buildXmlParts(
    node: any,
    properties: BaseProperty[]
): {
    attrs: Record<string, string>;
    elements: string[];
} {
    const attrs: Record<string, string> = {};
    const elements: string[] = [];
    const values = node.properties || {};

    for (const prop of properties) {
        if (!prop.xml) continue;

        const rawValue = values[prop.key];
        const value = resolveValue(rawValue);
        if (value === undefined) continue;

        // xml 可以是函数（动态生成）
        const meta = typeof prop.xml === "function" ? prop.xml(value, node) : prop.xml;

        if (!meta) continue;

        collectXml(meta, value, attrs, elements);
    }

    return { attrs, elements };
}

function resolveValue(value: any) {
    if (value === undefined || value === null) return undefined;
    if (value === "") return undefined;
    return value;
}

function collectXml(meta: XmlMeta, value: any, attrs: Record<string, string>, elements: string[]) {
    // attribute
    if (meta.attr) {
        const attr = buildAttr(meta, value);
        if (attr) {
            attrs[attr.name] = attr.value;
        }
    }

    // element（可能递归）
    if (meta.element) {
        const element = renderElement(meta, value);
        if (element) {
            elements.push(element);
        }
    }
}

function renderElement(meta: XmlMeta, value: any): string | null {
    const name = meta.namespace ? `${meta.namespace}:${meta.element}` : meta.element!;

    const attrs = renderElementAttrs(meta.elementAttrs);

    // 结构型节点（children 优先）
    if (meta.children && meta.children.length > 0) {
        const childrenXml = meta.children
            .map(child => renderElement(child, value))
            .filter(Boolean)
            .join("");

        return `<${name}${attrs}>${childrenXml}</${name}>`;
    }

    const kind: XmlElementKind = meta.kind || "text";

    switch (kind) {
        case "empty":
            return value === true ? `<${name}${attrs} />` : null;

        case "text":
            return `<${name}${attrs}>${escapeXml(String(value))}</${name}>`;

        case "cdata":
            return `<${name}${attrs}><![CDATA[${value}]]></${name}>`;

        case "raw":
            return String(value);

        default:
            return null;
    }
}

function renderElementAttrs(attrs?: Record<string, string>): string {
    if (!attrs) return "";

    return Object.entries(attrs)
        .map(([key, value]) => ` ${key}="${escapeXml(String(value))}"`)
        .join("");
}

function buildAttr(xml: XmlMeta, value: any): { name: string; value: string } | null {
    if (!xml.attr) return null;

    const name = xml.namespace ? `${xml.namespace}:${xml.attr}` : xml.attr;

    return {
        name,
        value: String(value)
    };
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
