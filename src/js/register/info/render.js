const tpl = (opts = {}) => {
    
    return `<div id="register-info-wrapper" class="register-info-wrapper">
        <form id="register-info-form">
            <label>
                <span>昵称：</span>
                <input id="register-info-nickname" name="nickname" type="password" placeholder="昵称">
            </label>
            <label>
                <span>电子邮箱：</span>
                <input id="register-info-email" name="email" type="password" placeholder="电子邮箱">
            </label>
            <label>
                <span>真实姓名：</span>
                <input id="register-info-realname" name="realname" type="text" placeholder="真实姓名">
            </label>
            <label>
                <span>性别：</span>
                <input id="register-info-sex" name="account" type="sex" placeholder="性别">
            </label>
            <label>
                <span>生日：</span>
                <input id="register-info-birthday" name="birthday" type="text" placeholder="生日">
            </label>
            <label>
                <span>居住地：</span>
                <div id="register-info-address"></div>
            </label>
            <input id="register-info-btn" type="submit" value="下一步">
        </form>
    </div>`
}

export default (conf) => {
    conf.container.innerHTML = tpl();
}