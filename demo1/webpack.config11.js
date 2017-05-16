var webpack = require('webpack');
var path = require('path');

console.log(__dirname);
console.log(path.join(__dirname));
module.exports = {
    context: path.join(__dirname),
    entry: "./src/js/index.js",
    module: {
      loaders: [{
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }]
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
}