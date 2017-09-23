const webpack = require('webpack');
const path = require('path');

const vendors = [
  'es5-shim',
  'babel-polyfill',
  'es6-promise/auto',
  'fetch-detector',
  'fetch-ie8'
];

module.exports = {
  output: {
    path: path.join(__dirname, 'src/lib'),
    filename: 'vendors.js',
    library: 'vendors',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: 'vendors',
      context: __dirname,
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
};