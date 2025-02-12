const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/form-steps.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new Dotenv()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
