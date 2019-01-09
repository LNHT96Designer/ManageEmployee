var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //Đường dẫn đầu vào đóng gói file
    entry: {
        index: './src/app/controller/index.js',
        admin: './src/app/controller/admin.js',
    },
    output: {
        //Đường dẫn xuất file
        path: path.resolve(__dirname, "dist"),
        //Tên file
        filename: "js/[name].js",
    },
    module:{
        rules:[
            //css trước
            {
                //Định dạng file cần chuyển
                test: /\.css$/,
                // Module để chuyển định dạng file
                use: ['style-loader', 'css-loader'],
            },
            //html
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            //img
            {
                test: /\.(png|jpg|svg)$/,
                use: {
                    loader: 'file-loader',
                    options:{
                        //Tên file hình sinh ra
                        name:'[name].[ext]',
                        //Thư mục chứa hình đó
                        outputPath: 'img/',
                        //Thay đổi đường dẫn trong file css
                        publicPath: 'img/',
                        limit: 10000,
                    }
                }
            },
            //scss
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            //Tên file được sinh ra
            filename: 'index.html',
            //Đường dẫn tới file gốc
            template: './src/app/Views/index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'admin.html',
            template: './src/app/Views/admin.html',
            chunks: ['admin'],
        })
    ],
    devServer:{
        contentBase: './dist',
    }
}