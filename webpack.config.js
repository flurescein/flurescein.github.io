const path              = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/js/main.js'),
    module: {
        rules: [{
                test: /\.pug$/,
                exclude: [/node_modules/],
                use: 'pug-loader'
            },
            {
                test: /\.(sass|scss)$/,
                exclude: [/node_modules/],
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    }
                )
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/pug/template.pug'
        }),
        new ExtractTextPlugin('flurescein.css')
    ],
    mode: 'production',
    devServer: {
        contentBase: __dirname
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        publicPath: '/docs',
        filename: 'flurescein.js'
    }
}
