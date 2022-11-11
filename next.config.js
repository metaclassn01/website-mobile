/** @type {import('next').NextConfig} */

const VConsolePlugin = require('vconsole-webpack-plugin');

const nextConfig = {
  env: {
    STAGE: process.env.STAGE,
  },
  headers: [
    { key: 'Access-Control-Allow-Credentials', value: 'true' },
    { key: 'Access-Control-Allow-Origin', value: '*' },
  ],
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/web-api/:path*',
        destination: 'https://dev-api.metaclassn.com/:path*',
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.concat([
      /**
       * 测试环境时显示微信调试工具
       *
       * STAGE 枚举
       *  develop 测试
       *  release 正式
       */
      new VConsolePlugin({
        enable: process.env.NODE_ENV === 'production' && process.env.STAGE === 'develop',
      }),
    ]);

    return config;
  },
  images: {
    domains: ['web-metaclassn-dev.oss-ap-southeast-1.aliyuncs.com'],
  },
  i18n: {
    locales: ['en_US', 'zh_TW'],
    defaultLocale: 'en_US',
  },
};

module.exports = nextConfig;
