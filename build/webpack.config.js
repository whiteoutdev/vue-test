const path  = require('path'),
      paths = require('./paths');

module.exports = function(env) {
    return {
        mode   : 'development',
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
        plugins: require('./plugins')(env),
        resolve: {
            extensions: ['.ts', '.js'],
            alias     : {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    };
};
