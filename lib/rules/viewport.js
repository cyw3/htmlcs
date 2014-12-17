/**
 * @file rule: viewport
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'viewport',

    desc: '<meta name="viewport" content="..."> recommended.',

    lint: function (enable, document, reporter) {
        if (!enable) {
            return;
        }

        var head = document.querySelector('head');
        if (!head) {
            return;
        }

        var viewportMeta = head.querySelector('meta[name="viewport"]');
        if (!viewportMeta) {
            reporter.warn(head, '027', '<meta name="viewport" content="..."> recommended.');
        }
    }

};