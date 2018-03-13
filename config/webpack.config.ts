import * as webpack from 'webpack'
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config: webpack.Configuration = {
    entry: {
        main: './src/client/index.tsx',
        vendor: './src/client/vendor.ts',
    },
    output: {
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.css']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: {
                    loader: 'source-map-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new ExtractTextWebpackPlugin('main.styles.css')
    ]
};

export default config;