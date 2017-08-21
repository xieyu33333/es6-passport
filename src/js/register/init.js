// import $ from 'jquery';

// $(function(){
//     //阻止浏览器默认行。
//     $(document).on({
//         dragleave:function(e){    //拖离
//             e.preventDefault();
//             console.log('拖离');
//         },
//         drop:function(e){  //拖后放
//             e.preventDefault();
//             console.log('拖后放');
//         },
//         dragenter:function(e){    //拖进
//             e.preventDefault();
//             console.log('拖进');
//         },
//         dragover:function(e){    //拖来拖去
//             e.preventDefault();
//         }
//     });
// });
import '../common/polyfill';
import render from './render';
import bindEvent from './event';
// import FormCheck from '../common/formCheck';
const register = (opts) => {
    render(opts);
    bindEvent();
}

export { register }