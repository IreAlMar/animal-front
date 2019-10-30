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
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // The loader is used to transpile the code into plain js code
                loader: ['babel-loader']
            },
            {
                test: /\.(png|jpeg)$/,
                loader: 'file-loader'
            }
        ]
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