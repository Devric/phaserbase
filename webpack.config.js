var HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/app.ts",
    devtool: "source-map",
    output: {
        filename: "./bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};
