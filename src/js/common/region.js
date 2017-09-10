/*
 * @file 滑块验证插件
 * @params Dom opts.container 渲染父容器
 * @params String opts.unsuccessTip 未验证成功时的提示语
 * @params String opts.successTip 验证成功时的提示语
 */


/*
 * symbol可用于私有方法
 */

import utils from './utils';
import { fetchJson } from './fetch';

const { domSelector: $ } = utils;
const render = Symbol('render');
const style =
`<style>

</style>`;

// const getRegionData = async function() {
//     return await fetchJson('/region-data', {});
// }

// const regionData = getRegionData();
// console.log(regionData);

class Region {
    constructor(opts) {
        if (!opts.container) {
            throw '请填写container配置';
        }
        if (!opts.name) {
            throw '请填写name配置';
        }
        else {
            this[render](opts);
        }
    }

    async [render](opts) {
        /*
         * 获取数据
         */
        let regionData = await fetchJson('/region-data', {});
        regionData = regionData.data;

        /*
         * 渲染基础模板
         */
        const tpl =  style + `
        <div class="region-select-wrapper">
            <select id="region-province-select"></select>
            <select id="region-city-select"></select>
            <select id="region-area-select"></select>
            <input id="region-selected" name="${ opts.name }" type="hidden">
        </div>
        `
        opts.container.innerHTML = tpl;

        /*
         * 数据和事件处理
         */

        const $provinceSelect = $('#region-province-select');
        const $citySelect = $('#region-city-select');
        const $areaSelect = $('#region-area-select');
        const $result = $('#region-selected');

        let provinceSelected;
        let citySelected;
        let areaSelected;

        let provinceOptions = '';
        regionData.forEach((item) => {
            provinceOptions += `<option value="${item.id}">${item.name}</option>`
        });

        $provinceSelect.innerHTML = provinceOptions;

        const provinceChange = (index) => {
            const i = index || parseInt($provinceSelect.value);
            const citys = regionData[i-1].city;
            let cityOptions = '';
            provinceSelected = i;
            citys.forEach((item) => {
                cityOptions += `<option value="${item.id}">${item.name}</option>`
            });
            $citySelect.innerHTML = cityOptions;
        }

        const cityChange = (index) => {
            let areas;
            if (index !== undefined) {
                areas = regionData[provinceSelected-1].city[index].district;
            }
            else {
                areas = regionData[provinceSelected-1].city.filter((item)=> {
                    return item.id === parseInt($citySelect.value);
                })[0].district;
            }
            let areaOptions = '';
            citySelected = parseInt($citySelect.value);
            areas.forEach((item) => {
                areaOptions += `<option value="${item.id}">${item.name}</option>`
            });
            $areaSelect.innerHTML = areaOptions;
        }

        const areaChange = () => {
            areaSelected = parseInt($areaSelect.value);
            $result.value = provinceSelected + ',' +
                            citySelected + ',' + areaSelected;
        }

        /*
         * 初始化
         */
        provinceChange(0);
        cityChange(0);
        areaChange();

        /*
         * 事件绑定
         */
        $provinceSelect.onchange = (e) => {
            provinceChange();
            cityChange(0);
            areaChange();
        }

        $citySelect.onchange = (e) => {
            cityChange();
            areaChange();
        }

        $areaSelect.onchange = (e) => {
            areaChange();
        }


    }

}

export default Region