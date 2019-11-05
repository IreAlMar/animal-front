const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
    // tell webpack the folder where to look for the files
    context: path.join(__dirname, 'src'),
    // polyfill -> 'whatwg-fetch'
    entry: ['whatwg-fetch', './index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                // The loader is used to transpile the code into plain js code
                test: /\.js$/,
                // Avoid transpiling node_modules code
                exclude: /node_modules/,
                loader: ['babel-loader']
            },
            {
                test: /\.(png|jpeg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css/,
                loader: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL),
            token: JSON.stringify(process.env.token)
        })
    ]
};