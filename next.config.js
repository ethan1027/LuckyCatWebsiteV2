module.exports = {
  reactStrictMode: true,
  target: "serverless",
  distDir: "build",
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
