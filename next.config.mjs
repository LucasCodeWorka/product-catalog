/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'drive.google.com',
          pathname: '/uc**', // Ajuste o caminho para corresponder ao formato do link do Google Drive
        },
      ],
    },
  };
  
  export default nextConfig;
  