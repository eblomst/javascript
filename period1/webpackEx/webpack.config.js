// This file exports our project's webpack configuration object. So we don't have to write 
// webpack main.js bundle.js because webpack needs a entry and output param. Now we can just 
// write webpack

module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    watch: true,                                 //Now when we run webpack it will watch for changes.
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: "file-loader"
            }
        ],
    }
};