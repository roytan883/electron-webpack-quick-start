const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const projectPath = path.join(__dirname, '../')

module.exports = {
  "context": `${projectPath}`,
  "mode": "production",
  "devtool": false,
  entry: './src/web-admin/index',

  output: {
    filename: '[name].[chunkhash:8].js',//chunkhash可以保证根据文件内容hash，减少公共模块重新下载
    // chunkFilename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../', 'dist/web-admin')
  },

  //代码输出优化
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'modules',
          priority: 10,
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
            ["import",
              {
                "libraryName": "antd",
                "style": true
              }
            ],
          ],
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: { "@primary-color": "#1DA57A" },
            }
          }
        ]
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
              name: '[name].[hash].[ext]',
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
    //删除旧的编译输出文件
    // new CleanWebpackPlugin(
    //   [
    //     'dist-web',
    //   ],
    //   {
    //     root: `${projectPath}`,
    //     verbose: true,
    //   }
    // ),
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

    //html模板插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'src/web-admin/index.html'),
    }),
  ],
};
