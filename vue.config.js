const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    css: {
        extract: false,
    },
    filenameHashing: false,
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
            new HtmlWebpackInlineSourcePlugin(),
            new CopyPlugin([
                { from: 'plugin-public/manifest.json', to: 'manifest.json' },
            ]),
        ],
        entry: {
            code: [ 'babel-polyfill', './plugin-src/index.ts' ],
            app: [ 'babel-polyfill' ],
        },
        output: {
          filename: '[name].js',
          chunkFilename: '[name].js',
        }
    }
};