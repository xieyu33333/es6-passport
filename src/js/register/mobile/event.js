import Slider from '../../common/slider.js';
import { fetchPost } from '../../common/fetch';
import utils from '../../common/utils';
import FormCheck from '../../common/form-check';

const { domSelector: $, removeClass, addClass } = utils;

export default (opts) => {
    let mobileVerifyToken;
    let checkResults;

    const $input = $('#register-mobile-input');
    const $btn = $('#register-mobile-btn');

    const formCheck = new FormCheck({
        form: document.getElementById('register-mobile-form')
    });


    const slider = new Slider({
        container: document.getElementById('register-verify-wrapper'),
        success: async ($wrapper, $text) => {
            let data = await fetchPost('/getMobileVerifyToken', {});
            if (data.code === 200) {
                mobileVerifyToken = data.mobileVerifyToken;
                addClass($wrapper, 'success');
                $text.innerText = '验证成功';
            }
            else {
                addClass($wrapper, 'failed');
                $text.innerText = '验证失败';
            }

            $btn.removeAttribute('disabled');
            removeClass($btn, 'disabled');
        }
    });

    $btn.onclick = async () => {
        checkResults = formCheck.check();

        if (checkResults.length) {
            const type = checkResults[0].type;
            if (type === 'present') {
                alert('请填写您的手机号');
            }
            else if (type === 'mobile') {
                alert('请填写正确的手机号');
            }
        }
        else {
            let data = await fetchPost('/getMobileVerifyToken', {
                mobile: $input.value,
                mobileVerifyToken: mobileVerifyToken
            });
            if (data.code === 200) {
                //location.replace('register-info.html');
                opts.success && opts.success();
            }
        }


    }



}