const path              = require('path'),
      webpack           = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      VueLoaderPlugin   = require('vue-loader/lib/plugin'),
      paths             = require('./paths');

module.exports = function(env) {
    return [
        new HtmlWebpackPlugin({
            template: path.resolve(paths.src, 'index.ejs')
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify(env)
            }
        })
    ];
};
