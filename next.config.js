/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withAntdLess({
  lessVarsFilePath: './src/styles/variables.less',
  ...nextConfig,
  webpack(config) {
    return config;
  },
});
