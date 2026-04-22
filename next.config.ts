import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "medcore-premium-hospital"; // Change this to your repository name if different

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;
