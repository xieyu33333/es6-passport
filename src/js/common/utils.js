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
    }
}

export default utils