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
    }
];
