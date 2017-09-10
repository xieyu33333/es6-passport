/*
 * export {xx, yy} 可以这样import, export obj则不行，新的babel禁止
 */
import { fetchPost } from '../../common/fetch';
import utils from '../../common/utils';
import FormCheck from '../../common/form-check';
import Region from '../../common/region';

/*
 * 解构运算, 解构重命名
 */
const { domSelector: $ } = utils;

export default (opts) => {
    /*
     * 初始化省市联动选择器
     * */
    const region = new Region({
        container: document.getElementById('register-info-address'),
        name: 'region'
    });

    /*
     * 表单校验
     * */
}