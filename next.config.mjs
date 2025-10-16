/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // IMPORTANT: project pages live under /econovetech on GitHub Pages
  basePath: "/econovetech",
  assetPrefix: "/econovetech/",
  trailingSlash: true,
};
export default nextConfig;