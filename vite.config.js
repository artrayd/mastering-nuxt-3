export default {
  build: {
    rollupOptions: {
      external: ["vue", "vue-router", "vue/server-renderer"],
    },
  },
};
