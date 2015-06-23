/**
 * @file rule: id-class-ad-disabled
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'id-class-ad-disabled',

    desc: 'Id and class can not use ad keyword, it will be blocked by adblock software.',

    target: 'parser',

    lint: function (getCfg, register, reporter) {
        register('attribdata', function (value) {
            if (!getCfg()) {
                return;
            }

            var name = this._attribname;

            if (['id', 'class'].indexOf(name) >= 0) {
                if (value.split(/[\_\-]+/).indexOf('ad') >= 0) {
                    reporter.warn(
                        this._tokenizer._sectionStart,
                        '031',
                        'Id and class can not use ad keyword, it will be blocked by adblock software.'
                    );
                }
            }
        });
    }

};