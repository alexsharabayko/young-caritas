// webpack-dev-server --inline --hot --history-api-fallback
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',

  entry: {
    index: './app'
  },

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js'
  },

  devtool: NODE_ENV === 'development' ? "cheap-inline-module-source-map" : null,

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0', 'stage-1']
        }
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/i,
        loader: 'file-loader?name=[path]/[name].[ext]?[hash]'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!resolve-url-loader!autoprefixer-loader!sass-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify('ru')
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.ProvidePlugin({
      React: "react"
    })
    //new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.js', '.scss']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.less']
  },

  devServer: {
    host: 'localhost',
    port: 4444,
    contentBase: __dirname + '/dist',
    hot: true,
    historyApiFallback: true
  }

  //watch: NODE_ENV === 'development',
  //
  //watchOptions: {
  //    aggregateTimeout: 100
  //},
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}