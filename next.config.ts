import type { NextConfig } from "next";

// Le site est publié sur GitHub Pages sous https://<user>.github.io/bosch-technic-auto
// -> export statique + basePath pour que les assets et liens internes pointent au bon endroit.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/bosch-technic-auto" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
