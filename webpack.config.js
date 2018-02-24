module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.(js|jsc)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2017', 'stage-0', 'react'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
}