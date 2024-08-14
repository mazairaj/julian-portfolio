/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: 'export',
    basePath: isProd ? '/julian-portfolio' : '',
    assetPrefix: isProd ? '/julian-portfolio/' : '',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
            pathname: '**',
          },
        ],
    },
};

export default nextConfig;
