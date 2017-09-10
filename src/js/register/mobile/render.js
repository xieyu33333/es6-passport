const tpl = (opts = {}) => {
    return `<div id="register-mobile-wrapper" class="register-mobile-wrapper">
        <form id="register-mobile-form" onsubmit="return false">
            <label>
                <span>手机号： </span>
                <input id="register-mobile-input" name="mobile" type="text" placeholder="${ opts.mobilePlaceHolder }" valid="present, mobile">
            </label>
            <label>
                <span>验证： </span>
                <div id="register-verify-wrapper" class="register-verify-wrapper"></div>
            </label>
            <input id="register-mobile-btn" class="disabled" disabled type="submit" value="发 送">
        </form>
    </div>`
}

export default (conf) => {
    conf.container.innerHTML = tpl(conf);
}