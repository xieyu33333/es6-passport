import '../../common/polyfill';
import render from './render';
import bindEvent from './event';
// import FormCheck from '../common/formCheck';
const regInfo = (opts) => {
    render(opts);
    bindEvent(opts);
}

export { regInfo }