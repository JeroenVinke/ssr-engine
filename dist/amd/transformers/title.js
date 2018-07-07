define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_1(html, transformerCtx, options) {
        var title = transformerCtx.document.head.querySelector('title');
        if (title) {
            return html.replace('<!-- title -->', title.innerHTML);
        }
        return html;
    }
    exports.default = default_1;
    ;
});
