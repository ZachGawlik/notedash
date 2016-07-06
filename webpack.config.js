const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  public: path.resolve(__dirname, 'public'),
  build: path.resolve(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: path.join(PATHS.public, 'index.jsx'),
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.jsx?$/,
        include: PATHS.public,
        loader: 'babel'
      }
    ]
  }
};

if (TARGET === 'dev' || !TARGET) {
  module.exports = merge(common, {

    devtool: 'eval-source-map',

    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      progress: true,
      stats: 'errors-only',

      host: process.env.HOST,
      port: process.env.PORT
    },
  });
} else if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'source-map'
  });
}
