// ================================= IMPORTS ================================= //

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devMode  = 'development';
const prodMode = 'production';
const buildDir = './build';

// ================================= FEATURES ================================= //

const features = {
    'babel': (config, mode) => {
        config.resolve.extensions.push('.js', '.jsx');
        config.module.rules.push({
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [ 'babel-loader' ]
        });
    },
    'css': (config, mode) => addCssLanguage(config, mode, {
        extensions: [ '.css' ],
        test: /\.css$/
    }),
    'sass': (config, mode) => addCssLanguage(config, mode, {
        extensions: [ '.sass', '.scss' ],
        test: /\.s[ac]ss$/,
        loader: 'sass-loader'
    }),
};

function addCssLanguage(config, mode, lang) {
    let rule = { test: lang.test, use: [] };

    rule.use.push(mode === devMode? 'style-loader' : MiniCssExtractPlugin.loader);
    rule.use.push('css-loader');
    if (lang.loader) rule.use.push(lang.loader);

    config.resolve.extensions.push(...lang.extensions);
    config.module.rules.push(rule);
}

// ================================= CONFIG ================================= //

function getBaseConfig(mode) {
    return {
        mode: mode,
        context: __dirname,
        entry: {},
        output: {},
        resolve: { extensions: [] },
        module: { rules: [] },
        plugins: [],
        optimization: {
            splitChunks: { chunks: 'all' }
        },
        devServer: {
            contentBase: buildDir,
            port: 9000,
            compress: true,
            historyApiFallback: true
        }
    };
}

function addFeatures(config, mode, useFeatures) {
    for (let feature of useFeatures) {
        features[feature](config, mode);
    }
}

function addEntry(config) {
    config.entry['app'] = './src/index.jsx';
    config.plugins.push(new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: [ 'app' ]
    }));

    config.output.path = path.resolve(buildDir);
    config.output.filename = 'static/[name].bundle.js';
}

function getWebpackConfig(mode = devMode) {
    let useFeatures = ['babel', 'css', 'sass'];

    let config = getBaseConfig(mode);

    addFeatures(config, mode, useFeatures);
    addEntry(config);

    if (mode === devMode) {
        config.devtool = 'inline-source-map';
    } else if (mode === prodMode) {
        config.plugins.push(new MiniCssExtractPlugin({
            filename: "static/[name].bundle.css",
        }));
    }

    config.plugins.push(new CopyWebpackPlugin([
        { from: 'src/resources', to: 'resources', test: /\.png$/ }
    ]));

    return config;
}

module.exports = (env, argv) => getWebpackConfig(argv.mode);
