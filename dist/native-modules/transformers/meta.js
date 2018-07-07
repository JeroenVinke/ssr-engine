import { appendToHead } from './utils';
export default function (html, transformerCtx, options) {
    var metaTags = transformerCtx.document.head.querySelector('meta');
    if (metaTags) {
        var metaTagsArray = Array.prototype.slice.call(metaTags);
        for (var i = 0; i < metaTagsArray.length; i++) {
            html = appendToHead(html, metaTagsArray[i].outerHTML);
        }
    }
    return html;
}
;
