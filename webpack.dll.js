const webpack = require('webpack');

const vendors = [
  'es5-shim',
  'babel-polyfill',
  'es6-promise/auto',
  'fetch-detector',
  'fetch-ie8'
];

module.exports = {
  output: {
    path: 'src/lib',
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
  ],
};