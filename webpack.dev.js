const common = require('./webpack.common');
const { merge } = require('webpack-merge');
//webpack-merge: concatenates arrays and merges objects creating a new object.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer({ overrideBrowserslist: ['> 1%', 'IE >= 10'] })
                ]
              }
            },
            { loader: 'sass-loader' }
          ]
        }
      ]
    },
    devServer: {
      port: 9000,
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
  });
