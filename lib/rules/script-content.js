/**
 * @file rule: script-content
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    name: 'script-content',

    desc: 'Content of <script> must meet standard.',

    lint: function (getCfg, document, reporter, code) {
        var cfg = getCfg();
        if (!cfg) {
            return;
        }

        var linters = getCfg('linters');
        var linter = linters && linters.script;
        if (typeof linter !== 'function') {
            return;
        }

        document.querySelectorAll('script:not([type]), script[type="text/javascript"]').forEach(function (script) {
            if (!script.childNodes.length) {
                return;
            }

            var content = script.childNodes[0].textContent;
            var pos = util.getPosition(code, script.startIndex);
            linter(content, pos, script);
        });
    }

};