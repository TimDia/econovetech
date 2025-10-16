/// <reference types="node" />
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/econovetech' : '',
  assetPrefix: isProd ? '/econovetech/' : '',
  trailingSlash: true
};