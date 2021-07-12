module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: '@',
        assets: '@/assets',
        components: '@/components',
        common: '@/common',
        network: '@/network',
        views: '@/views',
        swiper: './node_modules/swiper',
      },
    },
  },
};
