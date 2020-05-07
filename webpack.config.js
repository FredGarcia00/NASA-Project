const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   
    entry: {
        page1: './src/page1/js1/index.js',
        page2: './src/page2/index.js',
        page3: './src/page1/js2/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {presets:['@babel/preset-env']}
                }
            },
            {
                test:/\.html$/,
                use: [
                    {
                        loader:"html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template:'src/page1/js1/index.html',
            chunks:['page1']
        }),
        new HtmlWebPackPlugin({
            template:'src/page2/index2.html',
            filename: 'index2.html',
            chunks:['page2']
            
        }),
        new HtmlWebPackPlugin({
            filename: 'pod.html',
            template:'src/page1/js2/pod.html',
            chunks:['page3']
        }),
    ]
}