"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function default_1(html, transformerCtx, options) {
    var metaTags = transformerCtx.document.head.querySelectorAll('meta');
    if (metaTags) {
        var metaTagsArray = Array.prototype.slice.call(metaTags);
        for (var i = 0; i < metaTagsArray.length; i++) {
            html = utils_1.appendToHead(html, metaTagsArray[i].outerHTML);
        }
    }
    return html;
}
exports.default = default_1;
;
