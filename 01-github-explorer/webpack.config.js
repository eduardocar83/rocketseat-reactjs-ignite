const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevlopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevlopment ? 'development' : 'production',
    devtool: isDevlopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'public', 'index.html')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ],
    }
}