const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.base')
const webpack = require('webpack')
const portfinder = require('portfinder')
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

const devWebpackConfig = merge(commonConfig, { //引入webpack已配置好的通用设置
	mode: 'development',
	entry: [
		'react-hot-loader/patch'
	],
	devtool: 'inline-source-map',
	output: {
		//输出目录
		path: path.resolve(__dirname, './dist'),
		//文件名称
		filename: 'bundle.js',
		// chunkFilename: '[name].js'
	},
	plugins: [
		//开启HMR（热替换功能，替换更新部分，不重载页面）相当于在命令行加 --hot
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, './dist'),
		host: 'localhost',
		port: 8000,
		historyApiFallback: true, //所有404都连接到index.html
		proxy:{
			// 代理到后端的服务地址，会拦截所有以api开头的请求地址
			'/api': 'http://localhost:8000'
		},
		clientLogLevel: 'none'
	}
});

module.exports = new Promise((resolve, reject) => {
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
			devWebpackConfig.devServer.port = port

      // // Add FriendlyErrorsPlugin
      // devWebpackConfig.plugins.push(
      //   new openBrowserWebpackPlugin({ url: `http://localhost:${port}` })
      // )

			// resolve(devWebpackConfig)
			devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        // 清除控制台原有的信息
        clearConsole: true,
        // 打包成功之后在控制台给予开发者的提示
        compilationSuccessInfo: {
          messages: [`开发环境启动成功，项目运行在: http://${devWebpackConfig.devServer.host}:${port}`]
        },
        // 打包发生错误的时候
        onErrors: () => { console.log("打包失败") }
      }))
      resolve(devWebpackConfig)
    }
  })
})
