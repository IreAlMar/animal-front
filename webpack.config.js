const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // tell webpack the folder where to look for the files
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                // The loader is used to transpile the code into plain js code
                loader: ['babel-loader']
            }
        ]    
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html',
            inject: 'body'
        })
    ]
};