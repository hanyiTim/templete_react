const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cleanWebpackPlugin = new CleanWebpackPlugin(
  ['dist_prod'],{
      root:__dirname,
      verbose:  true,
      dry:false
  }
);


const definePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify("production")
});
const uglifyPlugin = new UglifyJsPlugin();




const config = baseConfig({
  output:{
    path:path.join(__dirname,'dist_prod/static'),
    publicPath:"./static/"
  },
  filenameFormat:"../$name.html",
  mode:"production",
  devtool:"none"
});

//prod  压缩
config.plugins.push(uglifyPlugin,cleanWebpackPlugin,definePlugin);

module.exports = config;
