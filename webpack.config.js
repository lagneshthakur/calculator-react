const webpack = require('webpack');
const path = require('path');
const RemoveStrictPlugin = require( 'remove-strict-webpack-plugin' );

const config = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    // Adding server
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        compress: true,
        port: 9000
    },
    plugins: [
        new RemoveStrictPlugin()
    ]
};
module.exports = config;