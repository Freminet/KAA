// ==UserScript==
// @name         Ad remover for KAA
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes annoying pop up ads on KAA
// @author       Lau
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function rf() {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            const style = iframe.style;
            if (
                style.width === '100%' &&
                style.height === '105px' &&
                style.opacity === '1' &&
                style.maxWidth === '420px' &&
                style.border === 'none' &&
                style.position === 'fixed' &&
                style.display === 'block' &&
                style.inset === '15px 0px auto auto' &&
                style.background === 'transparent' &&
                style.colorScheme === 'auto'
            ) {
                iframe.parentNode.removeChild(iframe);
            }
        });
    }

    rf();
    document.addEventListener('DOMNodeInserted', rf);
})();
