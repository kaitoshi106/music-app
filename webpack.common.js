const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config({path: '.env'});

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: [
            'react',
            'react-dom',
            'axios',
            'react-redux',
            'redux',
            'redux-thunk',
            'lodash',
            'camelize'
        ]
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|wav|mp3|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'img'
                    }
                }
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./node_modules')],
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.parsed)
        })
    ]
}