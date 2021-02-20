const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // plugins: [
    //     new CopyPlugin({patterns: [{ from: 'public'}]}),
    // ],
    //entry: './src/index.js',
    output: {
        filename: 'main.js',
        //path: path.resolve(__dirname, 'public'),
        libraryTarget: 'var',
        library: 'buzzworder'
    },
    // devServer: {
    //     contentBase: path.join(__dirname, 'public'),
    //     compress: true,
    //     port: 9000
    // }
};

