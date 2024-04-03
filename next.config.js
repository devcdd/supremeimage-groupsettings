/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === "production",
  // },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xdsserver-dev.irm.kr",
      },
      {
        protocol: "https",
        hostname: "dev.irmbestimage.com",
      },
    ],
  },
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-tree",
    "rc-table",
  ],
};

module.exports = nextConfig;
