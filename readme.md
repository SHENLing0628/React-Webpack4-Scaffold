# REACT+WEBPACK4脚手架
本项目为根据当前前端架构要求，搭建的空白REACT+WEBPACK4的脚手架

其中使用了以下新特性：
* HMR：HOT-MODULE-REPLACEMENT - 热替换模块 - 可以在应用运行时，不需要刷新页面即可直接替换增删模块
* happypack：原webpack打包为单线程执行，使用happypack优化后，可使用多线程执行项目的构建工作，对于大型项目较为友好

## 项目启动方式：
* 启动项目： ```yarn start```
* 调试项目： ```yarn dev```
* 打包项目： ```yarn build```
* 安装依赖： ```yarn``` 或 ```npm install <--package name--->```

### 参考
* https://juejin.im/post/5cfe4b13f265da1bb13f26a8#heading-28
* https://github.com/Z6T/react-webpack4-cook
