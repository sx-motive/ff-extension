/** @type {import('vite').UserConfig} */
import { viteStaticCopy } from 'vite-plugin-static-copy';
export default {
  build: {
    outDir: 'extension',
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json',
          dest: './',
        },
      ],
    }),
  ],
};
