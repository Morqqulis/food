
let path = require( 'path' );

module.exports = {
    mode: 'development',
    entry: './js/main.js',
    output: {
        path: path.resolve( __dirname, './js' ),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ [ '@babel/preset-env', {
                            debug: true,
                            corejs: 3,
                            useBuiltIns: 'usage'
                        } ] ]
                    }
                }
            }
        ]
    }
};
