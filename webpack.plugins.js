const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  isDevelopment && new ReactRefreshWebpackPlugin(),
].filter(Boolean);
