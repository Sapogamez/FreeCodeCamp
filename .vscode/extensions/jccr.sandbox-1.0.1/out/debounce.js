"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, waitMilliseconds = 50, options = {
    isImmediate: false
}) {
    let timeoutId;
    return function (...args) {
        const context = this;
        const doLater = function () {
            timeoutId = undefined;
            if (!options.isImmediate) {
                func.apply(context, args);
            }
        };
        const shouldCallNow = options.isImmediate && timeoutId === undefined;
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(doLater, waitMilliseconds);
        if (shouldCallNow) {
            func.apply(context, args);
        }
    };
}
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map