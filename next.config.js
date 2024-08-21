/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     esmExternals: "loose",
//   },
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/login',
//         permanent: true, // Set to true for a permanent redirect (308)
//       },
//     ];
//   },
// };

// module.exports = nextConfig;
