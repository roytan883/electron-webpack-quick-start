const webpack = require('webpack');
const path = require('path');

const projectPath = path.join(__dirname, '../')

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
          babelrc: false,
          presets: [
            // "@babel/preset-env",
            "@babel/preset-react",
            // "@babel/preset-env",
            // "@babel/preset-stage-0",
            // "react-native",
          ]
        }
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.less$/,
        use: ['css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
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
