import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
           input: [
    'resources/sass/liles.scss',
    'resources/js/liles.js',
],

            refresh: true,
        }),
    ],
});
