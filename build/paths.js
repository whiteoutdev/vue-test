const path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = {
    root,
    src : path.resolve(root, 'src'),
    dist: path.resolve(root, 'dist')
};
