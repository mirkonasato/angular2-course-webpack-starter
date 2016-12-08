var webpack = require('webpack');
var ngToolsWebpack = require('@ngtools/webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var appEnvironment = process.env.APP_ENVIRONMENT || 'development';
var isProduction = appEnvironment === 'production'; 

var webpackConfig = {

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
      { test: /\.ts$/, loader: isProduction ? '@ngtools/webpack' : ['ts-loader', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' }
    ]
  },
  resolve: {
    extensions: [ '.js', '.ts', '.html', '.css' ]
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
        environment: JSON.stringify(appEnvironment)
      }
    })
  ]
  
};

if (isProduction) {
  webpackConfig.plugins.push(new ngToolsWebpack.AotPlugin({
    tsConfigPath: './tsconfig.json',
    entryModule: './src/app/app.module#AppModule'
  }));
}

module.exports = webpackConfig;
