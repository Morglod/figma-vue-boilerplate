const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    css: { extract: false },
    filenameHashing: false,
    // delete HTML related webpack plugins
    chainWebpack: config => {
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        config.optimization.delete('splitChunks')
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/ui.html',
                filename: 'ui.html',
                inlineSource: '.(js)$',
                chunks: ['app']
            }),
            new HtmlWebpackInlineSourcePlugin()
        ],
        entry: {
            // app: [ './src/main.ts' ],
            plugin: [ './plugin-src/index.ts' ]
        }
    }
};