import withPWA from 'next-pwa';
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development"
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gogocdn.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'mangadex.org',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '**.mangadex.network',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'mangadex.network',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cmdxd98sb0x3yprd.mangadex.network',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'compsci88.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '**.compsci88.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'temp.compsci88.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'lowee.us',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '**.lowee.us',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'official.lowee.us',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

export default withPWA({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
})(nextConfig);
