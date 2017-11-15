const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理空dist文件夹
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    print: './src/print.js',
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: { //引入各种loader
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]  
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devtool: 'inline-source-map', //开发环境使用 可以定位错误发生位置
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
    new CleanWebpackPlugin(['dist']),
    new ManifestPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    port: 2000,
  },
}