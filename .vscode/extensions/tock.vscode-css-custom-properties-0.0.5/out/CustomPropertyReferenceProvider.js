"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const customPropertyUtils_1 = require("./customPropertyUtils");
class CustomPropertyReferenceProvider {
    constructor(customPropertyManager) {
        this.manager = customPropertyManager;
    }
    provideReferences(document, position) {
        const list = [];
        const { property } = customPropertyUtils_1.customPropertyFromPosition(document, position);
        if (property) {
            const reference = this.manager.references[property];
            Object.values(reference).forEach((valueObject) => {
                Object.keys(valueObject).forEach((filePath) => {
                    const arr = valueObject[filePath];
                    arr.forEach(({ location }) => {
                        list.push(new vscode.Location(vscode.Uri.file(filePath), location));
                    });
                });
            });
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
exports.default = CustomPropertyReferenceProvider;
//# sourceMappingURL=CustomPropertyReferenceProvider.js.map