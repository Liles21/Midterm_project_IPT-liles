const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .react()
   .sass('resources/sass/liles.scss', 'public/css')
   .sourceMaps();

mix.browserSync('127.0.0.1:8000'); // optional for live reload