const webpack = require('webpack');
const path = require('path');

const projectPath = path.join(__dirname, '../')

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
 * We've enabled ExtractTextPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/extract-text-webpack-plugin
 *
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  "context": `${projectPath}`,
  "mode": "production",

  entry: './src/web/index',

  output: {
    filename: '[name].[hash:8].js',
    // chunkFilename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../', 'dist-web')
  },

  //代码输出优化
  // optimization: {
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: [
            "@babel/preset-react",
            // "@babel/preset-env",
            // "@babel/preset-stage-0",
            // "react-native",
          ]
        }
      },
      {
        test: /\.css$/,

        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },

  plugins: [
    //删除旧的编译输出文件
    new CleanWebpackPlugin(
      [
        'dist-web',
      ],
      {
        root: `${projectPath}`,
        verbose: true,
      }
    ),
    //压缩js代码插件
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          comments: false,  // remove all comments
        },
        compress: {
          warnings: false
        }
      }
    }),

    new ExtractTextPlugin('style.css'),

    //html模板插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'src/web/index.html'),
    }),
  ],
};
