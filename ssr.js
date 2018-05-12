require("@babel/register")
require("@babel/polyfill")

const webpackIsomorphic = require('webpack-isomorphic');

// The base directory of your built files
webpackIsomorphic.install(__dirname + '/dist-web', {
  cache: process.env['NODE_ENV'] !== 'development'
});

// import App from './dist-web/ssr.js'
// console.log("App = ", App);
// return

// import App from './src/web/App'
// const IndexBundle = require("./src/web/AppSsr");
const IndexBundle = require("./dist-web/ssr.js");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
let { renderToString } = ReactDOMServer;
// let initialData = { todoList: ['11', '22', '33'] };
let initialData = {
  data: { "aaa": "abc123" },
  // html: html,
  chunks: webpackIsomorphic.getChunks()
};
// let instance = React.createElement(App, initialData); //.defalut不能少

console.log("webpackIsomorphic.getChunks() = ", webpackIsomorphic.getChunks())

let instance = React.createElement(IndexBundle.default, initialData); //.defalut不能少


let str = renderToString(instance);
// let str = renderToString(IndexBundle.default);

console.log(str);