const paths = require('./paths');

module.exports = [
    {
        test   : /\.vue$/,
        include: [
            paths.src
        ],
        loader : 'vue-loader'
    },
    {
        test   : /\.ts$/,
        loader : 'ts-loader',
        options: {appendTsSuffixTo: [/\.vue$/]}
    },
    {
        test: /\.s?css$/,
        use : [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
        ]
    },
    {
        test: /\.(jpg|jpeg|png|gif|svg|woff2?|ttf)$/,
        use : {
            loader : 'url-loader',
            options: {
                limit: 16384
            }
        }
    }
];
