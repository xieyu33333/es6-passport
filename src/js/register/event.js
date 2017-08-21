/*
 * export {xx, yy} 可以这样import, export obj则不行，新的babel禁止
 */
import { fetchPost } from '../common/fetch';
import utils from '../common/utils';

/*
 * 解构运算, 解构重命名
 */
const { domSelector: $ } = utils;

export default (opts) => {
    const $loginBtn = $('#login-btn');

    $loginBtn.onclick = async function () {
        let data = await fetchPost('/login');
        if (data.code === 200) {
            opts.success && opts.success();
        }
        else {
            opts.error && opts.error(data.code);
        }
    }
}