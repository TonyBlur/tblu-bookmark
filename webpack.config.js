const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.BOOKMARK_DATA_URL': JSON.stringify(process.env.BOOKMARK_DATA_URL),
    }),
  ],
};