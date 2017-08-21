const tpl = (opts = {}) => {
    const regBtnText = opts.loginBtnText || '注册';
    const accountPlaceHolder = opts.accountPlaceHolder || '手机号/邮箱/账号';
    const accountLabel = opts.accountLabel || '账号：';
    const passwordPlaceHolder = opts.passwordPlaceHolder || '请填写密码';
    const passwordLabel = opts.passwordLabel || '密码：';

    return `<div id="login-wrapper">
        <form id="login-form">
            <label>
                <span>用户名：</span>
                <input id="login-account" name="account" type="text" placeholder="${ accountPlaceHolder }">
            </label>
            <label>
                <span>密码：</span>
                <input id="login-password" name="password" type="password" placeholder="${ passwordPlaceHolder }">
            </label>
            <label>
                <span>确认密码：</span>
                <input id="login-password" name="password" type="password" placeholder="${ passwordPlaceHolder }">
            </label>
            <label>
                <span>手机号：</span>
                <input id="login-account" name="account" type="text" placeholder="${ accountPlaceHolder }">
            </label>
            <label>
                <span>电子邮箱：</span>
                <input id="login-account" name="account" type="text" placeholder="${ accountPlaceHolder }">
            </label>
            <input id="login-btn" type="submit" value="注册">
        </form>
    </div>`
}

export default (conf) => {
    conf.container.innerHTML = tpl();
}