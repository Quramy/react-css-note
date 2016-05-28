var path = require("path");
module.exports = {
  module: {
    loaders: [
      { test: /\.tsx?$/, exclude: /node_modules/, loaders: ["ts-loader"] },
      { test: /\.css$/, loaders: ["style", "css?modules&importLoaders=1", "postcss"] },
    ],
  },
  postcss: [
    require("autoprefixer"),
  ],
  entry: "./src/index.tsx",
  output: { path: path.resolve("dist"), filename: "bundle.js" },
  resolve: { extensions: ["", ".js", ".ts", ".tsx"] },
};
