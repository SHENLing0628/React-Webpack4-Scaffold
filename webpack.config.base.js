const path = require('path')
const babelpolyfill = require("babel-polyfill")
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

module.exports = {
	entry: [
		'src/index.js'
	],
	output: {
		path: path.resolve(__dirname, './dist') //输出目录
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
		alias: {
			src: path.resolve(__dirname, './src'),
			pages: path.resolve(__dirname, './src/pages'),
			router: path.resolve(__dirname, './src/router'),
			components: path.resolve(__dirname, './src/components'),
			serviceComponents: path.resolve(__dirname, './src/serviceComponents'),
			actions: path.resolve(__dirname, './src/actions'),
			api: path.resolve(__dirname, './src/api'),
			assets: path.resolve(__dirname, './src/assets')
		}
	},
	module: {
		//配置编译打包规则
		rules: [
			{
				test: /\.(jsx|js)?$/,
				exclude: /node_modules/,
				use: [
					{
						// 使用happypack搭配webpack4，进行多线程打包，提高打包效率，面对大型项目效果明显
						loader: 'happypack/loader?id=happyBabel' 
					}
				],
				
			},
			{
				test: /\.(sc|sas|c)ss$/,
				use: [
					// MiniCssExtractPlugin.loader,
					'style-loader', // 创建style标签，并将css添加进去
					'css-loader', // 编译css
					'postcss-loader',
					'sass-loader' // 编译scss
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)/, //图片处理
				use: {
					loader: 'url-loader',
					options: {
						outputPath: 'images/', // 图片输出的路径
						limit: 10 * 1024 // url-loader在图片较小的时候回把图片进行BASE64编码，大于limit的时候
					}
				}
			},
			{
				test: /\.(eot|woff2?|ttf|svg)$/, //字体处理
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name]-[hash:5].min.[ext]',
							limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
							publicPath: 'fonts/',
							outputPath: 'fonts/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html', //最终创建的文件名
			template: path.join(__dirname, './src/index.html'), //制定模板路径
			favicon:  path.resolve("./src/assets/images/logo.png"),
			minify: {
				collapseWhitespace: true //去除空白
			}
		}),
		new HappyPack({
			//用ID标识happypack处理的那些文件,id和rules中的相关设置相同
			id: 'happyBabel',
			loaders: [{
				loader: 'babel-loader?cacheDirectory=true',
			}],
			//共享进程池threadPool：HappyThreadPool代表共享进程池，即为多个happyPack实例使用同个进程池中的子进程去处理任务，防止资源占用过多
			threadPool: happyThreadPool,
			//允许happyPack输出日志
			verbose: false
		})
	],
	performance: false // 关闭性能提示
}
