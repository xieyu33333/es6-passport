import 'es5-shim';
import "babel-polyfill";
import 'es6-promise/auto';
import 'fetch-detector';
import 'fetch-ie8';
if (__DEV__) {
    require('./mock');
}