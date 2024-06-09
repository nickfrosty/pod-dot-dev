/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["lucide-react"],
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  // webpack5: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
  async redirects() {
    return [
      {
        source: "/rss",
        destination: "https://feeds.transistor.fm/pod-dev",
        permanent: true,
      },
      {
        source: "/spotify",
        destination:
          "https://open.spotify.com/show/5meBzwbt0vJvTBmv6RroMr?si=4SW7C3wNS_eWYz7YCFfdcw",
        permanent: true,
      },
      {
        permanent: true,
        source: "/apple",
        destination:
          "https://podcasts.apple.com/us/podcast/pod-dev-startup-businesses-on-blockchain/id1751165138",
        permanent: true,
      },
      {
        source: "/pcast",
        destination: "https://pca.st/stfxl3j2",
        permanent: true,
      },
      {
        source: "/pocketcasts",
        destination: "https://pca.st/stfxl3j2",
        permanent: true,
      },
      {
        source: "/youtube",
        destination:
          "https://www.youtube.com/playlist?list=PLk-EmIiBIYGF6sYMY9uhlC4OnxgKQbB9N",
        permanent: true,
      },
      {
        source: "/nick",
        destination: "https://x.com/nickfrosty",
        permanent: true,
      },
      {
        source: "/nickfrosty",
        destination: "https://x.com/nickfrosty",
        permanent: true,
      },
      {
        source: "/scott",
        destination: "https://x.com/cloakdDev",
        permanent: true,
      },
      {
        source: "/cloakd",
        destination: "https://x.com/cloakdDev",
        permanent: true,
      },
      {
        source: "/cloaked",
        destination: "https://x.com/cloakdDev",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
