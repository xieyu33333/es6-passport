/*
 * export {xx, yy} 可以这样import, export obj则不行，新的babel禁止
 */
import { fetchJson } from '../common/fetch';
import utils from '../common/utils';
import FormCheck from '../common/form-check';
import findTpl  from './findTpl.js';

/*
 * 解构运算, 解构重命名
 */
const { domSelector: $ } = utils;

export default async (opts) => {
    const $chooseMobile = $('#choose-mobile');
    const $chooseEmail = $('#choose-email');
    const $dialog = $('#forget-dialog');

    const findInfo = await fetchJson('/security-info', {});

    // const formCheck = new FormCheck({
    //     form: document.getElementById('login-form')
    // });
    const forget = (type) => {
        const $verifyInput = $('#forget-verify-input');
        const $forgetBtn = $('#forget-confirm-btn');
        const $number = $('#forget-verify-number');

        $verifyInput.oninput = () => {
            const MSGLENGTH = 6;
            let value = $verifyInput.value;
            //过滤非数字输入
            $verifyInput.value = value.replace(/\D/g, '');
            //长度过滤
            if ($verifyInput.value.length > (MSGLENGTH - 1)) {
                $mobileBtn.removeAttribute('disabled');
                removeClass($mobileBtn, 'disabled');
                addClass($mobileBtn, 'btn-primary');
                if (value.length > MSGLENGTH) {
                    $verifyInput.value = value.substring(0, MSGLENGTH);
                }
            }
            else {
                removeClass($mobileBtn, 'btn-primary');
                addClass($mobileBtn, 'disabled');
                $mobileBtn.setAttribute('disabled', 'disabled');
            }
        }

        $forgetBtn.onclick = async () => {
            let data = await fetchPost('/forget', {
                mobile: $number.innerText,
                verifyCode: $verifyInput.value,
            });
            if (data.code === 200) {
                opts.success && opts.success();
                location.replace('common-success.html?text=重置链接已发送至您的'+ type + '，请收到后按提示操作');
            }
            else {
                alert('验证码输入错误');
            }
        }
    }

    $dialog.innerHTML = findTpl('手机', findInfo.data.mobile)
    forget('手机');
    $chooseMobile.onclick = () => {
        $dialog.innerHTML = findTpl('手机', findInfo.data.mobile);
        forget('手机');

    };

    $chooseEmail.onclick = () => {
        $dialog.innerHTML = findTpl('邮箱', findInfo.data.email);
        forget('邮箱');
    }


}

// action="common-success.html?text=重置链接已发送至您的${ type }，请收到后按提示操作"