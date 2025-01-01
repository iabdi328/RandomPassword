const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Correct mode for development
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'), // Entry point
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: '[name][contenthash].js', // Output filename pattern
        clean: true, // Cleans the dist folder before each build
    },
    devtool: 'eval-source-map', // Improved source maps for debugging
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), // Serve from 'dist' folder
        },
        port: 8080, // Port for the dev server
        open: true, // Automatically open the browser
        hot: true, // Enable Hot Module Replacement (HMR)
        watchFiles: ['src/template.html'], // Watch template file for changes
        compress: true, // Enable gzip compression for better performance
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Match CSS files
                use: ['style-loader', 'css-loader'], // Apply CSS and inject into DOM
            },
            {
                test: /\.html$/i, // Match HTML files
                loader: 'html-loader', // Process image paths in HTML
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i, // Match image files
                type: 'asset/resource', // Copy image files to the output directory
                generator: {
                    filename: 'images/[name][hash][ext]', // Place images in /images folder
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App', // Page title
            filename: 'index.html', // Generated HTML filename
            template: 'src/template.html', // Path to your template
        }),
    ],
};
