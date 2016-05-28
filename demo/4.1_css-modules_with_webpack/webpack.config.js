var path = require('path');
module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      // postcssと併用する場合, importLoaders=1が必須
      { test: /\.css$/, loaders: ['style', 'css?modules&importLoaders=1', 'postcss'] },
    ],
  },
  postcss: [
    require('autoprefixer'),
  ],
  entry: './src/index.js',
  output: { path: path.resolve('dist'), filename: 'bundle.js' },
  resolve: { extensions: ['', '.js'] },
};
