const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname + "/build"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    devServer: {
        port: 3000,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: "src/images", to: "images" }],
        }),
    ],
};
