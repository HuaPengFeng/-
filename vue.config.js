const webpack = require('webpack');
const path = require('path');

module.exports = {
    devServer: {
        host: "127.0.0.1",
        port: 8080
    },
    lintOnSave: false, //取消eslint校验代码
    outputDir: "../dabao/dist", //构造打包后的输出目录
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, './src'))
            .set('mui', path.resolve(__dirname, './src/assets/mui/js/mui.js'))
    },
    configureWebpack: {
        // 增加一个plugins  
        plugins: [
            new webpack.ProvidePlugin({
                mui: "mui",
                "window.mui": "mui"
            })
        ]
    }
}