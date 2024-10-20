"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class CustomPropertyCompletionItemProvider {
    constructor(customPropertyManager) {
        this.manager = customPropertyManager;
    }
    provideCompletionItems() {
        return new vscode.CompletionList(this.manager.completionItems);
    }
}
exports.default = CustomPropertyCompletionItemProvider;
//# sourceMappingURL=CustomPropertyCompletionItemProvider.js.map