const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.base')
const webpack = require('webpack')

module.exports = merge(commonConfig, {//引入webpack已配置好的通用设置
  mode: 'development',
  entry: ['react-hot-loader/patch'],
  devtool: 'cheap-module-eval-source-map',
  output: {
    //输出目录
    path: path.resolve(__dirname, 'dist'),
    //文件名称
    filename: 'bundle.js',
    chunkFilename: '[name].js'
  },
  plugins: [
    //开启HMR（热替换功能，替换更新部分，不重载页面）相当于在命令行加 --hot
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        VUEP_BASE_URL: '/'
      }
    })
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: 8000,
    historyApiFallback: true, //所有404都连接到index.html
    proxy:{
      // 代理到后端的服务地址，会拦截所有以api开头的请求地址
      '/api': 'http://localhost:8000'
    }
  }
})
