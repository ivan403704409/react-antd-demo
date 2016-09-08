var webpack = require('webpack');

module.exports = {
    // entry: [
    //   'webpack/hot/only-dev-server',
    //   "./js/app.js"
    // ],
    entry: {
        app: './js/app.js',
        // common: __dirname + '/src/static/common.js'
        },
    output: {
        path: __dirname + '/dev/', //打包输出文件
        filename: "[name].js",
        publicPath: ''         //最终发布的根路径，即网站根目录，异步加载的模块也是以这个为根目录
    },
    // output: {
    //     path: './build',
    //     filename: "bundle.js"
    // },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" },
            {test: /\.less/,loader: 'style-loader!css-loader!less-loader'},
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                {
                  presets:['react','es2015']
                }
            }
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    devServer: {
        hot: true,
        inline: true
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
};
