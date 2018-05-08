const webpack = require('webpack');
const path = require('path');

const projectPath = path.join(__dirname, '../')

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

module.exports = {
  "context": `${projectPath}`,
  "mode": "development",
  "devtool": "eval-source-map", //在浏览器中调试模式可以查看源代码,此模式下初次生成慢,但是之后的热更新编译快
  entry: './src/web/index',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: [
            "@babel/preset-react",
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
    new ExtractTextPlugin('style.css'),

    //html模板插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'src/web/index.html'),
    }),

    //热更新插件
    new webpack.HotModuleReplacementPlugin(),
  ],
  //热更新服务器配置
  "devServer": {
    "contentBase": [
      // `${projectPath}\\dist-web`,
      `${projectPath}\\static`,
      // `${projectPath}\\dist-web\\renderer-dll`
    ],
    "host": "localhost",
    "port": 9070,
    "hot": true,
    "overlay": true,
    "open": true,
  },
};
