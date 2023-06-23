// FILE: vite.config.ts
// _______________________________________________

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from "path";
// _______________________________________________

// Resolve aliases
const aliases = {
	'/@/': path.resolve(__dirname, 'src'), // Replace 'src' with your actual source directory
};
// _______________________________________________

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: aliases,
	},
});
// _______________________________________________