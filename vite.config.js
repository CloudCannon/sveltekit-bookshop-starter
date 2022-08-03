import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    resolve: {
        alias: {
            $content: resolve('./content'),
            $bookshop: resolve('./component-library/')
        }
    },
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..'],
        },
    },

};

export default config;