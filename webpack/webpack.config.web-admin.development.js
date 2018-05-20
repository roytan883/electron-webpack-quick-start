const webpack = require('webpack');
const path = require('path');

const projectPath = path.join(__dirname, '../')

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  "context": `${projectPath}`,
  "mode": "development",
  "devtool": "eval-source-map", //在浏览器中调试模式可以查看源代码,此模式下初次生成慢,但是之后的热更新编译快
  entry: './src/web-admin/index',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          babelrc: false,
          presets: [
            "@babel/preset-react",
            ["@babel/preset-stage-2", { "loose": true, "decoratorsLegacy": true }]
          ],
          plugins: [
            "@babel/plugin-transform-runtime",
          ],
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
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'static/',
            }
          }
        ]
      },
      // {
      //   test: /\.(png|jpg|jpeg)$/,
      //   use: ['url-loader']
      // },
    ]
  },

  plugins: [
    //html模板插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'src/web-admin/index.html'),
    }),

    //热更新插件
    new webpack.HotModuleReplacementPlugin(),
  ],
  //热更新服务器配置
  "devServer": {
    "contentBase": [
      // `${projectPath}\\dist-web`,
      `${projectPath}/src/web-admin/static`,
      // `${projectPath}\\dist-web\\renderer-dll`
    ],
    "host": "localhost",
    "port": 9070,
    "hot": true,
    "overlay": true,
    "open": true,
  },
};
