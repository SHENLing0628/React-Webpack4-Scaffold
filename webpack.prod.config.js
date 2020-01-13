const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.base')

module.exports = merge(commonConfig, {
	mode: 'production',
	output: {
		//输出目录
		path: path.resolve(__dirname, './dist'),
		//文件名称
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js'
	},
	optimization: {
		usedExports: true,
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors'
				}
			}
		}
	},
	plugins: [
	]
})
