# REACT+WEBPACK4脚手架
本项目空白的REACT+WEBPACK4的脚手架

其中使用了以下新特性：
* HMR：HOT-MODULE-REPLACEMENT - 热替换模块 - 可以在应用运行时，不需要刷新页面即可直接替换增删模块
* happypack：原webpack打包为单线程执行，使用happypack优化后，可使用多线程执行项目的构建工作，对于大型项目较为友好
* antd：当前版本已添加antd配置，antd样式引入方法为.babelrc文件中plugins的import部分，采用babel-plugin-import的方法引入配置

## 项目启动方式：
* 启动项目： ```yarn start```
* 调试项目： ```yarn dev```
* 打包项目： ```yarn build```
* 安装依赖： ```yarn``` 或 ```npm install <--package name--->```

## 项目结构
|-- src
    |-- actions 请求响应，将所有请求响应归类于该部分
    |-- api 接口
    |-- assets 存放图片、字体等文件
    |-- components 公共组件
    |-- serviceComponents 服务化组件
    |-- Pages 页面
    |-- router 路由
    |-- utils 接口请求配置
    |-- index.js 页面入口
    |-- index.html 页面html模板
|-- webpack.config.base.js webpack打包基础配置
|-- webpack.dev.config.js webpack在开发模式下的配置（使用HMR等）
|-- webpack.prod.config.js webpack在生产模式下，打包构建项目的配置
|-- dist 打包构建后的文件

### 参考
* https://juejin.im/post/5cfe4b13f265da1bb13f26a8#heading-28
* https://github.com/Z6T/react-webpack4-cook
