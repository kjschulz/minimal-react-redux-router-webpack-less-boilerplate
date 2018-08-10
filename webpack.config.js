const argv = require('yargs').argv;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let devMode = argv.mode === 'development';

module.exports = {
  entry: ['./src/main.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'assets/'
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|le|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(devMode ? '' : 'dist', {}),
    new HtmlWebpackPlugin({
      hash: true,
      pageTitle: 'Welcome',
      template: './tpl.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? 'style.css' : 'style.[hash].css',
      chunkFilename: devMode ? 'style.css' : 'style.[hash].css'
    })
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: {
      index: './index.html'
    },
    hot: true
  }
};
