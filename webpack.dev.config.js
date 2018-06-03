const path=require('path');
const webpack = require('webpack');
module.exports={
    // 入口文件指向src/index.js
    entry:path.join(__dirname,'src/index.js'),
    //打包后的文件到当前目录下的dist文件夹，名为bundle.js
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    rules:{
        test:/\.(js|jsx)$/,
        use:['babel-loader?cacheDirectory=true'],
        include:path.join(__dirname,'src')
    },
    devServer:{
        //将服务器根目录指向打包后的dist文件，默认是指向项目的根目录
        contentBase:path.join(__dirname,'./dist')
    },
};
