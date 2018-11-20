const path              = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      VueLoaderPlugin   = require('vue-loader/lib/plugin'),
      paths             = require('./paths');

module.exports = [
    new HtmlWebpackPlugin({
        template: path.resolve(paths.src, 'index.ejs')
    }),
    new VueLoaderPlugin()
];
