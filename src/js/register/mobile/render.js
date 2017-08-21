const tpl = (opts = {}) => {
    return `<div id="register-mobile-wrapper">
        <form id="login-form">
            <label>
                <span>手机号</span>
                <input id="register-mobi-number" name="mobile" type="text" placeholder="${ opts.mobilePlaceHolder }">
            </label>
            <label>
                <span>验证</span>
                <div id="register-verify-wrapper" class="register-verify-wrapper"></div>
            </label>
            <input id="login-btn" type="submit" value="发 送">
        </form>
    </div>`
}

export default (conf) => {
    conf.container.innerHTML = tpl();
}