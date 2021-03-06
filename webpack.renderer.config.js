const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");
const path = require("path");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  stats: {
    errorDetails: true,
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    modules: [path.resolve("./node_modules"), path.resolve("./")],
  },
};
