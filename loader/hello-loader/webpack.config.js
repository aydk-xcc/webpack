const path = require('path'); // node的方法

module.exports  = {
    entry: "./main.js", // 入口文件
    mode: "development",
    output: { // 导入文件配置，也是index.html 引入的
        filename: "bundle.js",
        path: path.resolve(__dirname, "output")
    },
    module: {
        rules: [
            {
                test: /\.hello$/, // 需要加载的文件类型，正则匹配
                loader: [path.resolve(__dirname, './loader/hello-loader.js'),] // 我们的loader文件
            }
        ]
    }
}
