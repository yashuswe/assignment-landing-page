/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.forEach((rule) => {
          if (rule.test && rule.test.toString().includes('css')) {
            rule.use.forEach((u) => {
              if (u.loader && u.loader.includes('css-loader') && u.options) {
                u.options.hmr = false;
              }
            });
          }
        });
      }
      return config;
    },
  };
  
  export default nextConfig;
  