const tpl = (data = {}) => {
    const tpl = `
        <p id="login-error"></p>
        <div id="login-wrapper">
            <form id="login-form">
                <label>
                    <span class="account-label">${ accountLabel }</span>
                    <input id="login-account" name="account" type="text" placeholder="${ accountPlaceHolder }" maxlength="${accountMax}">
                </label>

                <label>
                    <span class="password-label">${ passwordLabel }</span>
                    <input id="login-password" name="password" type="password" placeholder="${ passwordPlaceHolder }" maxlength="${passwordMax}">
                </label>

                <label style="display: none">
                    <span class="verify-label">验证码：</span>
                    <input id="login-verify" name="verifyCode" type="password" placeholder="${ verifyPlaceHolder }">
                    <img src="/verifycode">
                </label>

                <label style="display: none">
                    <span>记住密码：</span>
                    <input id="login-remember" name="remember" type="checkbox">
                </label>

                <input id="login-btn" type="submit" value="${ loginBtnText }">
            </form>
        </div>`

    return tpl;
}

export default (conf) => {
    conf.container.innerHTML = tpl();
}