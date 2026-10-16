// import type { NextConfig } from "next";

const createMDX = require("@next/mdx");

const nextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 2. Configure Turbopack (Next.js 16 stable syntax)
  turbopack: {
    rules: {
      "*.mdx": {
        loaders: ["@mdx-js/loader"],
        as: "*.js",
      },
    },
  },
};

const withMDX = createMDX({
  // Add optional remark/rehype markdown plugins here
});

module.exports = withMDX(nextConfig);

export default nextConfig;
