import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  agentRules: false,
  // The career map is a self-contained page under /public rather than a
  // route. Next serves public files at their exact path, so without this
  // rewrite /life-in-layers 404s and only /life-in-layers/index.html works.
  async rewrites() {
    return [
      { source: "/life-in-layers", destination: "/life-in-layers/index.html" },
      { source: "/life-in-layers/", destination: "/life-in-layers/index.html" },
    ];
  },
};

export default nextConfig;
