import { appendToHead } from './utils';
export default function (html, transformerCtx, options) {
    const metaTags = transformerCtx.document.head.querySelectorAll('meta');
    if (metaTags) {
        const metaTagsArray = Array.prototype.slice.call(metaTags);
        for (let i = 0; i < metaTagsArray.length; i++) {
            html = appendToHead(html, metaTagsArray[i].outerHTML);
        }
    }
    return html;
}
;
