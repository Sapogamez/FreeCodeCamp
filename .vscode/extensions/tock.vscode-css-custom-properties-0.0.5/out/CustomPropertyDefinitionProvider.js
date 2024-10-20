"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const customPropertyUtils_1 = require("./customPropertyUtils");
class CustomPropertyDefinitionProvider {
    constructor(customPropertyManager) {
        this.manager = customPropertyManager;
    }
    provideDefinition(document, position) {
        const list = [];
        const { property } = customPropertyUtils_1.customPropertyFromPosition(document, position);
        if (property) {
            const definition = this.manager.definitions[property];
            Object.values(definition).forEach((valueObject) => {
                Object.keys(valueObject).forEach((filePath) => {
                    const arr = valueObject[filePath];
                    arr.forEach(({ location }) => {
                        list.push(new vscode.Location(vscode.Uri.file(filePath), location));
                    });
                });
            });
        }
        return Promise.resolve(list);
    }
}
exports.default = CustomPropertyDefinitionProvider;
//# sourceMappingURL=CustomPropertyDefinitionProvider.js.map