import { defineConfig, loadEnv } from 'vite';
import alias from '@rollup/plugin-alias';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);

export default defineConfig((context) => {
  const env = loadEnv(context.mode, process.cwd(), 'APP_');

  switch (context.mode) {
    default:
      return {
        envPrefix: 'APP_',
        server: {
          port: Number(env.APP_PORT),
          host: '0.0.0.0',
        },
        build: {
          outDir: 'dist',
        },
        plugins: [
          react(),
          alias({
            entries: [
              {
                find: '@src',
                replacement: resolve(projectRootDir, 'src'),
              },
            ],
          }),
        ],
      };
  }
});
