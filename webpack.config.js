var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

const VENDOR_LIBS = [
  'react', 'lodash', 'redux', 'react-redux', 'react-dom', 'redux-thunk',
];

module.exports = {
  entry: {
    bundle: './src/index.jsx',
    vendor: VENDOR_LIBS,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.sass'],
    alias: {
      global: path.resolve(__dirname, 'src/style/'),
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: {
              modules: true,
              importLoaders: 1,
            }},
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['src/style/global.scss'],
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer(),
        ],
      },
    }),
  ],
};
