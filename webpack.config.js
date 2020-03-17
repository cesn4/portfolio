const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "sourcemap",
    stats: "minimal",
    entry: './src/index.tsx',
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "src")
        },
        extensions: ['.ts', '.tsx', '.js', '.scss']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: ["babel-loader", "eslint-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: [/node_modules/],
                use: ["ts-loader", "eslint-loader"],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "postcss-loader", 'css-loader']
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 2
                        }
                    },
                    "postcss-loader",
                    {
                        loader: "resolve-url-loader",
                        options: {
                            root: path.resolve(__dirname, "src")
                        }
                    },
                    "sass-loader",
                    {
                        loader: "sass-resources-loader",
                        options: {
                        resources: path.resolve(__dirname, "src/styles/res/_index.scss")
                        }
                    },
                ]
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/',
                            name: '[name].[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "styles.min.[hash].css"
        }),
        new StylelintPlugin()
    ]
};