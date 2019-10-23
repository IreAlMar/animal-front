const webpack = require('webpack');
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                // The loader is used to transpile the code into plain js code
                loader: 'babel-loader'
            }
        ]    
    }
};