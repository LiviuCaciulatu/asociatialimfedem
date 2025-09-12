import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a static export in `out/` when possible
  output: 'export',
  // Use trailing slashes to create directory-style output (index.html in folders)
  trailingSlash: true,
};

export default nextConfig;
