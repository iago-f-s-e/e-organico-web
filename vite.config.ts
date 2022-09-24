import { defineConfig, loadEnv } from 'vite';
import alias from '@rollup/plugin-alias';
import react from '@vitejs/plugin-react';

type NodeEnv = 'development' | 'staging' | 'production';
type PortEnv = string;

type Env = {
  NODE_ENV: NodeEnv;
  PORT: PortEnv;
};

const pluginsConfig = {
  alias: alias({
    entries: [{ find: '@src', replacement: './src' }],
  }),
  react: react(),
};

// https://vitejs.dev/config/
export default defineConfig((context) => {
  const envs = loadEnv(context.command, process.cwd(), '') as Env;

  switch (envs.NODE_ENV) {
    case 'production':
      return {
        plugins: [pluginsConfig.alias, pluginsConfig.react],
      };

    case 'staging':
      return {
        plugins: [pluginsConfig.alias, pluginsConfig.react],
      };

    default:
      return {
        server: {
          port: Number(envs.PORT),
        },
        plugins: [pluginsConfig.alias, pluginsConfig.react],
      };
  }
});
