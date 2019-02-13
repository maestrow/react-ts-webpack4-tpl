const path = require ('path');

module.exports = {
    webpackConfig: require('./webpack.config'),
    components: 'src/components/**/[A-Za-z-]*.tsx',
    require: [
        path.join(__dirname, 'src/index.css')
    ],
    serverPort: 6060
}