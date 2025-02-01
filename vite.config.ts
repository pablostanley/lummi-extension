import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import type { Plugin } from 'vite'

// Debug plugin to log module resolution
const debugPlugin: Plugin = {
    name: 'debug-plugin',
    configResolved(config) {
        console.log('Build config resolved');
        console.log('Checking src directory structure:');
        const srcPath = path.resolve(__dirname, 'src');
        fs.readdirSync(srcPath).forEach(file => {
            console.log(`- ${file}`);
        });

        console.log('\nChecking components:');
        const componentsPath = path.resolve(srcPath, 'components');
        if (fs.existsSync(componentsPath)) {
            fs.readdirSync(componentsPath).forEach(file => {
                console.log(`- ${file}`);
            });
        }
    },
    resolveId(source, importer) {
        if (source.includes('Categories') || importer?.includes('Categories')) {
            console.log('\nResolving module:', {
                source,
                importer
            });
        }
        return null;
    },
    load(id) {
        if (id.includes('Categories')) {
            console.log('\nLoading module:', id);
        }
        return null;
    },
    transform(code, id) {
        console.log('\nTransforming:', id);
        if (id.includes('Categories.tsx')) {
            console.log('Categories component found in transform');
            return code;
        }
        if (id.includes('App.tsx')) {
            console.log('App.tsx imports:', code.match(/import.*from.*;/g));
        }
        return null;
    }
};

// Custom plugin to copy files
const copyManifestPlugin = {
    name: 'copy-manifest',
    writeBundle() {
        // Copy manifest.json
        fs.copyFileSync('manifest.json', 'dist/manifest.json')

        // Create icons directory if it doesn't exist
        if (!fs.existsSync('dist/icons')) {
            fs.mkdirSync('dist/icons', { recursive: true })
        }

        // Copy icon files if they exist
        const iconSizes = ['16', '48', '128']
        iconSizes.forEach(size => {
            const iconPath = `icons/icon${size}.png`
            if (fs.existsSync(iconPath)) {
                fs.copyFileSync(iconPath, `dist/${iconPath}`)
            }
        })
    }
};

export default defineConfig({
    plugins: [
        debugPlugin,
        react({
            jsxRuntime: 'automatic',
            babel: {
                babelrc: false,
                configFile: false
            }
        }),
        copyManifestPlugin
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        include: ['react', 'react-dom']
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            input: path.resolve(__dirname, 'index.html'),
            output: {
                format: 'es',
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        },
        sourcemap: true,
        modulePreload: {
            polyfill: false
        },
        cssCodeSplit: false,
        minify: false
    },
    base: ''
}) 