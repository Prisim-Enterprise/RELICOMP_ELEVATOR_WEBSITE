import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config, { dev }) => {
    if (!dev) {
      const emptyCss = path.join(process.cwd(), "scripts/empty-css-module.js");
      config.plugins.push({
        apply(compiler) {
          compiler.hooks.normalModuleFactory.tap("InlineGlobalCss", (nmf) => {
            nmf.hooks.beforeResolve.tap("InlineGlobalCss", (data) => {
              if (!data?.request) return;
              const resolved = path.normalize(
                path.resolve(data.context || "", data.request)
              );
              if (resolved.endsWith(`${path.sep}app${path.sep}globals.css`)) {
                data.request = emptyCss;
              }
            });
          });
        },
      });
    }
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
