var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    'app': './src/main.ts',
    'polyfills': [
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {test: /\.component.ts$/, loader: 'ts!angular2-template'},
      {test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader: 'raw'}
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.html', '.css']
  },
  plugins: [
    // see https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      './src'
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfills'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    })
  ]
  
};
