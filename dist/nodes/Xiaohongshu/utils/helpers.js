"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeUrl = normalizeUrl;
exports.parseCommaSeparated = parseCommaSeparated;
exports.buildRequestParams = buildRequestParams;
function normalizeUrl(url) {
    if (!url)
        return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    return `https://${url}`;
}
function parseCommaSeparated(value) {
    if (!value)
        return [];
    return value.split(',').map((item) => item.trim()).filter(Boolean);
}
function buildRequestParams(params) {
    const result = {};
    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null && value !== '') {
            result[key] = value;
        }
    }
    return result;
}
//# sourceMappingURL=helpers.js.map