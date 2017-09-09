import '../../common/polyfill';
import render from './render';
import bindEvent from './event';
// import FormCheck from '../common/formCheck';
const regMobile = (opts = {}) => {
    var defaultOpts = {
        mobilePlaceHolder: '请输入您的手机号',
    };

    var options = Object.assign(defaultOpts, opts)

    render(options);
    bindEvent(options);
}

export { regMobile }