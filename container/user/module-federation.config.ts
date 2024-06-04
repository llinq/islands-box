import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'user',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
