"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
function getAttributes(el) {
    return (Array.from(el.attributes)
        // @ts-ignore
        .map(a => [a.name, a.value])
        .reduce((acc, attr) => {
        // @ts-ignore
        acc[attr[0]] = attr[1];
        return acc;
    }, {}));
}
exports.getAttributes = getAttributes;
//# sourceMappingURL=getAttributes.js.map