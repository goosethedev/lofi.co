import { defineConfig } from 'vite';

import unocss from 'unocss/vite';
import solid from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';
import icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [unocss(), icons({ compiler: "solid" }), solid(), solidSvg()],
  server: {
    port: 3000,
    strictPort: true
  }
})
