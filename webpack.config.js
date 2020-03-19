var path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: path.resolve(__dirname, 'src'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
              test: /.(scss|css)$/,
              exclude: /node_modules/,
              use:[
                {
                  loader:MiniCssExtractPlugin.loader,
                  options: {
                    reloadAll: true
                  }
                },
                'css-loader',
                'postcss-loader',
                'sass-loader'
              ]
            }
        ]
    },
    entry: ['./index.jsx', './main.scss'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    plugins: [
      new MinifyPlugin({}, {
        comments: false
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
};
