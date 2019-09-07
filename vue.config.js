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
        config.entry('app').delete()
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                template: './ui-src/ui.html',
                filename: 'ui.html',
                inlineSource: '.(js)$',
                chunks: [ 'ui' ]
            }),
            new HtmlWebpackInlineSourcePlugin(),
            new CopyPlugin([
                { from: 'plugin-public/manifest.json', to: 'manifest.json' },
            ]),
        ],
        entry: {
            ui: [ './ui-src/main.ts' ],
            code: [ './plugin-src/index.ts' ],
        },
        output: {
          filename: '[name].js',
          chunkFilename: '[name].js',
        }
    }
};