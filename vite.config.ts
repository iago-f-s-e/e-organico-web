import { defineConfig, loadEnv } from 'vite';
import alias from '@rollup/plugin-alias';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);

type NodeEnv = 'development' | 'staging' | 'production';
type PortEnv = string;

type Env = {
  NODE_ENV: NodeEnv;
  PORT: PortEnv;
};

// https://vitejs.dev/config/
export default defineConfig((context) => {
  const envs = loadEnv(context.command, process.cwd(), '') as Env;

  switch (envs.NODE_ENV) {
    default:
      return {
        server: {
          port: Number(envs.PORT),
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
