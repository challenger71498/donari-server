const { resolve } = require('path');

module.exports = {
    entry: resolve(__dirname, 'src', 'index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    target: 'node',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            '@': resolve(__dirname, 'src')
        },
    },
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    }
};
