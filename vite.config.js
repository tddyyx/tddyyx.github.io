import { defineConfig } from "vite";
import banner from "vite-plugin-banner";
import pkg from "./package.json" assert { type: "json" };
import { resolve } from "path";
import autoprefixer from "autoprefixer";

const license = [
  "/*!\n",
  ` * Start Bootstrap - ${pkg.title} v${pkg.version} (${pkg.homepage})\n`,
  ` * Copyright 2013-` + new Date().getFullYear(),
  ` ${pkg.author}\n`,
  ` * Licensed under ${pkg.license} (https://github.com/BlackrockDigital/${pkg.name}/blob/master/LICENSE)\n`,
  ` */\n`,
  `\n`,
].join("");

export default defineConfig({
  build: {
    outDir: "./",
    rollupOptions: {
      input: {
        creative: resolve(__dirname, "js/creative.js"),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  plugins: [banner({ content: license, outDir: "./", verify: true })],
});
