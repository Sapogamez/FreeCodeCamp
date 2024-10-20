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
const vscode = require("vscode");
const path = require("path");
const css = require("css");
const customPropertyUtils_1 = require("./customPropertyUtils");
const util_1 = require("util");
const textDecoder = new util_1.TextDecoder("utf-8");
class CustomPropertyManager {
    constructor() {
        var _a, _b;
        this.completionItems = [];
        this.definitions = {};
        this.items = {};
        this.path = ((_b = (_a = vscode.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.uri.fsPath) || "";
        this.pathToProperties = {};
        this.references = {};
        this.config = vscode.workspace.getConfiguration("cssCustomProperties");
        const defaultLanguages = [];
        this.languages = defaultLanguages;
        if (this.config.has("languages")) {
            this.languages = this.config.get("languages") || defaultLanguages;
        }
    }
    /*
     * Load all workspace files and set watcher;
     */
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            const fileGlobPatterns = (this.config.get("files") || []);
            const loadUrisPromises = [];
            fileGlobPatterns.forEach((fileGlobPattern) => {
                loadUrisPromises.push(vscode.workspace.findFiles(fileGlobPattern));
                const watcher = vscode.workspace.createFileSystemWatcher(fileGlobPattern, false, false, false);
                const onWatcherEvent = (uri) => __awaiter(this, void 0, void 0, function* () {
                    yield this.processUri(uri);
                    this.processItems();
                });
                watcher.onDidDelete(onWatcherEvent.bind(this));
                watcher.onDidChange(onWatcherEvent.bind(this));
                watcher.onDidCreate(onWatcherEvent.bind(this));
            });
            const globMatchedUris = yield Promise.all(loadUrisPromises);
            const processUriPromises = [];
            globMatchedUris.forEach((uris) => {
                uris.forEach((uri) => processUriPromises.push(this.processUri(uri)));
            });
            yield Promise.all(processUriPromises);
            this.processItems();
        });
    }
    /*
     * Check the property and value of a CSS declaration for definitions and references.
     */
    processDeclaration(declaration, metadata, filePath) {
        const { type, property, value, position } = declaration;
        if (!value || type !== "declaration" || !property) {
            return;
        }
        /*
         * Finding property definitions.
         * We only want to add defined properties as completion items.
         */
        if (property.startsWith("--")) {
            this.items[property] =
                this.items[property] ||
                    new vscode.CompletionItem(property, vscode.CompletionItemKind.Variable);
            this.items[property].insertText = property;
            this.definitions[property] = this.definitions[property] || {};
            this.definitions[property][value] =
                this.definitions[property][value] || {};
            this.definitions[property][value][filePath] =
                this.definitions[property][value][filePath] || [];
            const start = (position === null || position === void 0 ? void 0 : position.start) || {};
            const line = (start.line || 1) - 1;
            const column = (start.column || 1) - 1;
            metadata.location = new vscode.Range(line, column, line, column + property.length);
            this.definitions[property][value][filePath].push(Object.assign({}, metadata));
            this.pathToProperties[filePath].push(property);
        }
        /*
         * Finding _all_ references in the value.
         *   Value can be across multiple lines and contain multiple references.
         *   We need to find the relative line, and all custom properties.
         */
        const lines = value.split("\n");
        lines.forEach((line, relLine) => {
            let exec;
            const regex = customPropertyUtils_1.CUSTOM_PROPERTY_REFERENCE_REGEX_G;
            while ((exec = regex.exec(line)) !== null) {
                const prop = exec[1];
                this.references[prop] = this.references[prop] || {
                    details: {},
                };
                this.references[prop][value] = this.references[prop][value] || {};
                this.references[prop][value][filePath] =
                    this.references[prop][value][filePath] || [];
                const offsetA = relLine === 0 ? property.length + 1 : 0;
                const offsetB = relLine === 0 ? property.length + 2 : 0;
                const positionA = offsetA + regex.lastIndex - exec[1].length;
                const positionB = offsetB + regex.lastIndex - 1;
                const start = (position === null || position === void 0 ? void 0 : position.start) || {};
                const line = (start.line || 1) - 1 + relLine;
                const column = relLine === 0 ? (start.column || 1) - 1 : 0;
                const extraA = relLine === 0 ? 0 : -1;
                metadata.location = new vscode.Range(line, column + positionA + extraA, line, column + positionB);
                this.references[prop][value][filePath].push(Object.assign({}, metadata));
                if (!this.pathToProperties[filePath].includes(prop)) {
                    this.pathToProperties[filePath].push(prop);
                }
            }
        });
    }
    /*
     * For each rule, process its individual declarations.
     */
    processDeclarations(declarations, filePath = "", selectors = [], media = "") {
        if (!declarations || !filePath) {
            return;
        }
        const file = path.basename(filePath);
        const initialMetadata = {
            file,
            location: new vscode.Range(0, 0, 0, 0),
            selectors,
            media,
        };
        declarations.forEach((declaration) => this.processDeclaration(declaration, initialMetadata, filePath));
    }
    /*
     * For each Uri, parse it as CSS and process its rules.
     */
    processUri(uri) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.resetUriData(uri);
            const file = yield vscode.workspace.fs.readFile(uri);
            const text = textDecoder.decode(file);
            const { path } = uri;
            const cssParsed = css.parse(text);
            (_a = cssParsed.stylesheet) === null || _a === void 0 ? void 0 : _a.rules.forEach((rule) => {
                if (rule.type === "media") {
                    const { rules, media } = rule;
                    rules === null || rules === void 0 ? void 0 : rules.forEach(({ declarations, selectors }) => this.processDeclarations(declarations, path, selectors, media));
                }
                else if (rule.type === "rule") {
                    const { declarations, selectors } = rule;
                    this.processDeclarations(declarations, path, selectors);
                }
                else if (rule.type === "comment") {
                    // nada
                }
            });
        });
    }
    /*
     * Clears out the completion items array.
     * Rebuilds them based on the current definitions state.
     */
    processItems() {
        this.completionItems.splice(0, this.completionItems.length);
        Object.keys(this.definitions).forEach((property) => {
            const definition = this.definitions[property];
            const item = this.items[property];
            const values = Object.keys(definition).sort();
            const files = {};
            const defCount = values.reduce((prev, curr) => {
                Object.keys(definition[curr]).forEach((file) => (files[file] = 1));
                return Object.keys(definition[curr]).length + prev;
            }, 0);
            const fileCount = Object.keys(files).length;
            item.documentation = new vscode.MarkdownString(`**${defCount}** definition${defCount === 1 ? "" : "s"} in **${fileCount}** file${fileCount === 1 ? "" : "s"}\n\n${values.join(", ")}`);
            this.completionItems.push(item);
        });
    }
    /*
     * Wiping memory of a specific Uri.
     * Clears out the definitions, references, and resets the pathToProperties mapping.
     */
    resetUriData(uri) {
        var _a;
        const { path } = uri;
        (_a = this.pathToProperties[path]) === null || _a === void 0 ? void 0 : _a.forEach((property) => {
            Object.keys(this.definitions[property]).forEach((value) => {
                if (this.definitions[property][value][path]) {
                    delete this.definitions[property][value][path];
                    if (!Object.keys(this.definitions[property][value]).length) {
                        delete this.definitions[property][value];
                    }
                }
            });
            Object.keys(this.references[property]).forEach((value) => {
                if (this.references[property][value][path]) {
                    delete this.references[property][value][path];
                    if (!Object.keys(this.references[property][value]).length) {
                        delete this.references[property][value];
                    }
                }
            });
        });
        this.pathToProperties[path] = [];
    }
}
exports.default = CustomPropertyManager;
//# sourceMappingURL=CustomPropertyManager.js.map