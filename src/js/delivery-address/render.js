import { fetchPost } from '../../common/fetch';
import utils from '../../common/utils';
import Region from '../../common/region';

const tpl = function(opts = {}) {

    const data = opts.data;
    if (opts.addrId) {
        const currentData = data.filter((item) => {
            return opts.addrId === item.addrId
        })[0];
    }
    else {
        const currentData = {};
    }

    return `
    <div id="delivery-address-wrapper" class="delivery-address-wrapper">
        <form id="delivery-address-form" onsubmit="return false">
            <input id="delivery-address-id" name="addrId" type="hidden" value="${currentData.addrId}">
            <label>
                <span>省市区：</span>
                <div id="delivery-address-region"></div>
            </label>
            <label>
                <span>详细地址：</span>
                <textarea id="delivery-address-detail" name="detailAddress"  placeholder="昵称" value="${currentData.detailAddress} "valid="present">
            </label>
            <label>
                <span>邮政编码：</span>
                <input id="delivery-address-email" name="postalcode" type="text" placeholder="邮政编码" value="${currentData.postalcode}>
            </label>
            <label>
                <span>收货人姓名：</span>
                <input id="delivery-address-name" name="name" type="text" placeholder="真实姓名" value="${currentData.postalcode}>
            </label>
            <label>
                <span>手机号码：</span>
                <input id="delivery-address-mobile" name="mobile" type="text" placeholder="手机号码" value="${currentData.mobile}">
            </label>
            <label>
                <span>固定电话：</span>
                <input id="delivery-address-telphone" name="telphone" type="text" placeholder="固话号码" value="${currentData.telephone}">
            </label>

            <input id="save-delivery-address" type="submit" value="保存">
        </form>

        <div class="delivery-address-list" id="delivery-address-list">

        </div>
    </div>
`
}
export default async (conf) => {

    if (conf.addrId) {
        const data =
    }

    conf.container.innerHTML = ;

}