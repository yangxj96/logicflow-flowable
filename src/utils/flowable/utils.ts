export function attrs(obj: Record<string, any>) {
    return Object.entries(obj)
        .filter(([, v]) => v !== undefined && v !== "")
        .map(([k, v]) => ` ${k}="${v}"`)
        .join("");
}

export function escapeXml(str: string) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
