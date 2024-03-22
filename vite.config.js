import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner';
import pkg from "./package.json" assert { type: "json" }
import { resolve } from 'path';

const license = ['/*!\n',
  ` * Start Bootstrap - ${ pkg.title } v${ pkg.version } (${ pkg.homepage })\n`,
  ` * Copyright 2013-` + (new Date()).getFullYear(), ` ${ pkg.author }\n`,
  ` * Licensed under ${ pkg.license } (https://github.com/BlackrockDigital/${ pkg.name }/blob/master/LICENSE)\n`,
  ` */\n`,
  `\n`
].join('');

export default defineConfig({
  build: {
    outDir: './', 
    rollupOptions: {
      input: {
        ['creative']: resolve(__dirname, 'js/creative.js'),
        ['creative.css']: resolve(__dirname, 'css/creative.css'),
      },
      output: { 
        banner: license,
        entryFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  plugins: [banner(license)]
})