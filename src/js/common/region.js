/*
 * @file 滑块验证插件
 * @params Dom opts.container 渲染父容器
 * @params String opts.unsuccessTip 未验证成功时的提示语
 * @params String opts.successTip 验证成功时的提示语
 */


/*
 * symbol可用于私有方法
 */

import utils from '../common/utils';
import { fetchJson } from '../../common/fetch';

const { domSelector: $ } = utils;
const render = Symbol('render');
const bindEvent = Symbol('bindEvent');
const style =
`<style>

</style>`;

const getRegionData = async function() {
    return await fetchJson('/region-data', {});
}

const regionData = getRegionData();
console.log(regionData);

class Region {
    constructor(opts) {
        if (!opts.container) {
            throw '请填写container配置';
        }
        else {
            this[render](opts);
            this[bindEvent](opts);
        }
    }

    [render](opts) {
        const tpl =  style + `
        <div class="region-select-wrapper">
            <select id="region-province-select"></select>
            <select id="region-city-select"></select>
            <select id="region-area-select"></select>
            <input name="${ opts.name }" type="hidden">
        </div>
        `
        const provinceOptions = '';
        regionData.forEach((item) => {
            provinceOptions += `<option data="${item.id}">${item.name}</option>`
        });

        opts.container.innerHTML = tpl;
        const $provinceSelect = $('region-province-select');
        $provinceSelect.innerHTML = provinceOptions;
    }

    [bindEvent](opts) {
        const $provinceSelect = $('region-province-select');
        const $citySelect = $('region-city-select');
        const $areaSelect = $('region-area-select');

        $citySelect.onchange = () => {

        }

        $provinceSelect.onchange = () => {

        }

    }
}

export default Region