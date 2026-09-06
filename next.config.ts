import type { NextConfig } from 'next';

const isPagesBuild = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: isPagesBuild ? '/money_graph' : '',
};

export default nextConfig;
