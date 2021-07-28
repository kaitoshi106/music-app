const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
    module: 'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugin: () => [
                                autoprefixer({ overrideBrowserslist: ['> 1%', 'IE >= 10'] })
                            ]
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/main.css' }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    optimization: {
        minimizer: [
            //optimize css
            new OptimizeCssAssetsWebpackPlugin(),
            //optimize js
            new TerserPlugin(),
            //optimize html
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ],
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    filename: 'js/vendor.js',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    }
})