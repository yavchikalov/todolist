const mix = require('laravel-mix');
const webpack = require('webpack');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/scss/app.scss', 'public/css');


mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'assets': __dirname + '/resources/assets',
            'scss': __dirname + '/resources/assets/scss',
            'images': __dirname + '/resources/assets/images'
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            mapGetters: ['vuex', 'mapGetters'],
            mapActions: ['vuex', 'mapActions'],
            mapMutations: ['vuex', 'mapMutations'],
            mapState: ['vuex', 'mapState']
        })
    ]
});
   // watchOptions: {
   //     poll: 1000 // Check for changes every second
   //   }
