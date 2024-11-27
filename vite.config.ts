import vitePlugin from '@curves_digital/builder/plugin';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vitePlugin()],
	server: {
		// open: true
	},
	build: {
		minify: false,
	},
});
