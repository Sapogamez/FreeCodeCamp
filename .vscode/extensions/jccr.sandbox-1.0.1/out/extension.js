"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const fileSystemProvider_1 = require("./fileSystemProvider");
const debounce_1 = require("./debounce");
const htmlView_1 = require("./htmlView");
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const memFs = new fileSystemProvider_1.MemFS();
        context.subscriptions.push(vscode.workspace.registerFileSystemProvider("sandbox", memFs, {
            isCaseSensitive: true
        }));
        let currentOutputPanel;
        function getSandboxWorkspaceFolder() {
            return vscode.workspace.getWorkspaceFolder(vscode.Uri.parse("sandbox:/"));
        }
        function openDocumentInColumn(fileName, overwrite, column, focus = false) {
            return __awaiter(this, void 0, void 0, function* () {
                let uri = vscode.Uri.parse(`sandbox:/${fileName}`);
                try {
                    memFs.writeFile(uri, new Uint8Array(0), {
                        create: true,
                        overwrite
                    });
                }
                catch (error) {
                    console.error(error);
                }
                let doc = yield vscode.workspace.openTextDocument(uri);
                yield vscode.window.showTextDocument(doc, {
                    preview: false,
                    viewColumn: column,
                    preserveFocus: !focus
                });
                return doc;
            });
        }
        function prepareWorkspace(overwrite) {
            return __awaiter(this, void 0, void 0, function* () {
                yield vscode.commands.executeCommand("workbench.action.closeAllEditors");
                yield vscode.commands.executeCommand("vscode.setEditorLayout", {
                    groups: [{ groups: [{}, {}], size: 0.5 }, { groups: [{}, {}], size: 0.5 }]
                });
                const docHTML = yield openDocumentInColumn("index.html", overwrite, vscode.ViewColumn.One);
                const docJS = yield openDocumentInColumn("script.js", overwrite, vscode.ViewColumn.Two, true);
                const docCSS = yield openDocumentInColumn("style.css", overwrite, vscode.ViewColumn.Three);
                currentOutputPanel = vscode.window.createWebviewPanel("sandboxOutput", "Output", { viewColumn: vscode.ViewColumn.Four, preserveFocus: true }, { enableScripts: true });
                const htmlView = new htmlView_1.HTMLView(currentOutputPanel.webview, context);
                context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(debounce_1.debounce(e => {
                    if (e.document === docHTML) {
                        htmlView.html = docHTML.getText();
                    }
                    if (e.document === docJS) {
                        htmlView.js = docJS.getText();
                    }
                    if (e.document === docCSS) {
                        htmlView.css = docCSS.getText();
                    }
                }, 750)));
                htmlView.html = docHTML.getText();
                htmlView.js = docJS.getText();
                htmlView.css = docCSS.getText();
            });
        }
        if (getSandboxWorkspaceFolder()) {
            yield prepareWorkspace(true);
        }
        context.subscriptions.push(vscode.commands.registerCommand("sandbox.newSandbox", () => __awaiter(this, void 0, void 0, function* () {
            if (getSandboxWorkspaceFolder()) {
                const option = yield vscode.window.showWarningMessage("You have an active sandbox. What would you like to do?", { modal: true }, "New Sandbox", "Reopen Editors");
                if (option === "New Sandbox") {
                    yield prepareWorkspace(true);
                }
                else if (option === "Reopen Editors") {
                    yield prepareWorkspace(false);
                }
                return;
            }
            vscode.workspace.updateWorkspaceFolders(vscode.workspace.workspaceFolders
                ? vscode.workspace.workspaceFolders.length
                : 0, null, {
                uri: vscode.Uri.parse("sandbox:/"),
                name: "Sandbox"
            });
        })));
        context.subscriptions.push(vscode.commands.registerCommand("sandbox.reopenEditors", () => __awaiter(this, void 0, void 0, function* () {
            if (!getSandboxWorkspaceFolder()) {
                vscode.window.showInformationMessage("There is currently no sandbox opened to reopen editors for.");
                return;
            }
            yield prepareWorkspace(false);
        })));
        context.subscriptions.push(vscode.commands.registerCommand("sandbox.closeSandbox", () => __awaiter(this, void 0, void 0, function* () {
            const workspaceFolder = getSandboxWorkspaceFolder();
            if (!workspaceFolder) {
                vscode.window.showInformationMessage("There is currently no sandbox opened in this instance to close.");
                return;
            }
            vscode.workspace.updateWorkspaceFolders(workspaceFolder.index, 1);
            for (const editor of vscode.window.visibleTextEditors) {
                if (editor.document.uri.scheme === "sandbox") {
                    if (editor.hide) {
                        // I know this is deprecated but there's really no alternative right now.
                        // See: https://github.com/microsoft/vscode/issues/15178
                        editor.hide();
                    }
                    else {
                        throw new Error("Unable to close sandbox owned editors");
                    }
                }
            }
            currentOutputPanel.dispose();
        })));
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map