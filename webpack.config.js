var path = require('path');

module.exports = {
    mode: 'development',
    target: "node",
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    }
};