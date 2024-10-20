"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customPropertyFromPosition = exports.CUSTOM_PROPERTY_REFERENCE_REGEX_G = exports.CUSTOM_PROPERTY_REFERENCE_REGEX = exports.CUSTOM_PROPERTY_DEFINITION_REGEX = void 0;
exports.CUSTOM_PROPERTY_DEFINITION_REGEX = /(--[^:; ]+):/;
exports.CUSTOM_PROPERTY_REFERENCE_REGEX = /var\((--[^:;) ]+)\)/;
exports.CUSTOM_PROPERTY_REFERENCE_REGEX_G = /var\((--[^:;) ]+)\)/g;
/*
 * Given a position, find any property in question and whether or not it is a reference.
 *  reference:  something: var(--property);
 *  definition: --property: something;
 */
function customPropertyFromPosition(document, position) {
    const line = document.lineAt(position.line).text;
    const range = document.getWordRangeAtPosition(position);
    // Look 1 char left in string to see if a paren
    const isReference = line.charAt(Math.max(((range === null || range === void 0 ? void 0 : range.start.character) || 1) - 1, 0)) === "(";
    const isDefinition = !isReference;
    // -4 for characters "var(" if reference
    const positionAOffset = isReference ? 4 : 0;
    // +1 for character ")" if reference
    const positionBOffset = isReference ? 1 : 0;
    const substr = line.substr(((range === null || range === void 0 ? void 0 : range.start.character) || positionAOffset) - positionAOffset, ((range === null || range === void 0 ? void 0 : range.end.character) || 0) + positionBOffset);
    // finding reference or definition in the substring.
    const match = isReference
        ? substr.match(exports.CUSTOM_PROPERTY_REFERENCE_REGEX)
        : substr.match(exports.CUSTOM_PROPERTY_DEFINITION_REGEX);
    const property = (match === null || match === void 0 ? void 0 : match[1]) || "";
    return {
        property,
        isDefinition: !!property && isDefinition,
        isReference: !!property && isReference,
    };
}
exports.customPropertyFromPosition = customPropertyFromPosition;
//# sourceMappingURL=customPropertyUtils.js.map