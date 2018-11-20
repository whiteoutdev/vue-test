const path  = require('path'),
      paths = require('./paths');

module.exports = function() {
    return {
        context: paths.root,
        entry  : {
            index: path.resolve(paths.src, 'index.ts')
        },
        output : {
            path: paths.dist
        },
        module : {
            rules: require('./rules')
        },
        plugins: require('./plugins'),
        resolve: {
            extensions: ['.ts', '.js'],
            alias     : {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    };
};
