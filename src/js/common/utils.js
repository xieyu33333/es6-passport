const utils = {
    domSelector: (selector) => {
        return window.document.querySelector(selector);
    },

    obj2query: (obj) => {
        if (!obj) {
            return;
        }
        var query = Object.keys(obj)
           .filter(key => obj[key] !== '' && obj[key] !== null)
           .map(key => key + '=' + obj[key])
           .join('&');
        return query.length > 0 ? '?' + query : null;
    },

    hasClass: function (obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },

    addClass: function (obj, cls) {
        obj.className.trim();
        if (!utils.hasClass(obj, cls)) obj.className += " " + cls;
    },

    removeClass: function (obj, cls) {
        if (utils.hasClass(obj, cls)) {
            const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    },

    isArray: function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    },

    isObject: function(arg) {
        return Object.prototype.toString.call(arg) === '[object Object]';
    }
}

export default utils