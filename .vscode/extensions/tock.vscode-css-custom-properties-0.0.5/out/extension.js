"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const CustomPropertyManager_1 = require("./CustomPropertyManager");
const CustomPropertyDefinitionProvider_1 = require("./CustomPropertyDefinitionProvider");
const CustomPropertyReferenceProvider_1 = require("./CustomPropertyReferenceProvider");
const CustomPropertyCompletionItemProvider_1 = require("./CustomPropertyCompletionItemProvider");
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const customPropertyManager = new CustomPropertyManager_1.default();
        yield customPropertyManager.initialize();
        const completionProvider = vscode.languages.registerCompletionItemProvider(customPropertyManager.languages, new CustomPropertyCompletionItemProvider_1.default(customPropertyManager), "-", "-");
        const definitionProvider = vscode.languages.registerDefinitionProvider(customPropertyManager.languages, new CustomPropertyDefinitionProvider_1.default(customPropertyManager));
        const referenceProvider = vscode.languages.registerReferenceProvider(customPropertyManager.languages, new CustomPropertyReferenceProvider_1.default(customPropertyManager));
        context.subscriptions.push(completionProvider);
        context.subscriptions.push(definitionProvider);
        context.subscriptions.push(referenceProvider);
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map