/* eslint-disable no-undef */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {
    const loaders = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: isDev,
            reloadAll: true
        },
    }, 'css-loader'];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
}

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env'

        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    };

    if (preset) {
        opts.presets.push(preset);
    }

    return opts;
}

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions()
    }];

    if (isDev) {
        loaders.push('eslint-loader');
    }

    return loaders;
}

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: 'src/index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new CopyWebpackPlugin({
            patterns: [{
                    from: path.resolve(__dirname, 'src/img/logo.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/video-img.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/header_fill_img.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/sprite.svg'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/person-2.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/person.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/trending_up.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/services.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/reviews-1.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/reviews-2.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/reviews-bg.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/img/team-member.png'),
                    to: path.resolve(__dirname, 'dist/img')
                }
            ]
        }),
    ];

    if (isProd) {
        base.push(new BundleAnalyzerPlugin);
    }

    return base;
}

module.exports = {
    context: path.resolve(__dirname),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './src/index.js'],
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles'),
        }
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    },
    devtool: isDev ? 'source-map' : '',
    plugins: plugins(),
    module: {
        rules: [{
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript')
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    }
}