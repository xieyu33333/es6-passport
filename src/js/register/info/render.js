const tpl = (opts = {}) => {
    const regBtnText = opts.loginBtnText || '注册';
    const accountPlaceHolder = opts.accountPlaceHolder || '手机号/邮箱/账号';
    const accountLabel = opts.accountLabel || '账号：';
    const passwordPlaceHolder = opts.passwordPlaceHolder || '请填写密码';
    const passwordLabel = opts.passwordLabel || '密码：';

    return `<div id="login-wrapper">
        <form id="login-form">
            <label>
                <span>昵称</span>
                <input id="login-password" name="password" type="password" placeholder="${ passwordPlaceHolder }">
            </label>
            <label>
                <span>电子邮箱：</span>
                <input id="login-password" name="password" type="password" placeholder="${ passwordPlaceHolder }">
            </label>
            <label>
                <span>真实姓名</span>
                <input id="login-account" name="account" type="text" placeholder="${ accountPlaceHolder }">
            </label>
            <label>
                <span>性别</span>
                <input id="login-account" name="account" type="text" placeholder="${ accountPlaceHolder }">
            </label>
            <label>
                <span>生日</span>
                <input id="login-account" name="account" type="text" placeholder="${ accountPlaceHolder }">
            </label>
            <label>
                <span>居住地</span>
                <div id="provinceAndCity"></div>
                <input name="liveAddress">
            </label>
            <input id="login-btn" type="submit" value="下一步">
        </form>
    </div>`
}

export default (conf) => {
    conf.container.innerHTML = tpl();
}