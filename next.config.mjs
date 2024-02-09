/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: 'www.coindesk.com' }], // Add the domain here
    },
};

export default nextConfig;
