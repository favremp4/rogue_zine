const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        article: resolve(__dirname, "./article/index.html"),
        about: resolve(__dirname, "./about/index.html"),
        article_1: resolve(__dirname, "./article-1/index.html"),
        article_2: resolve(__dirname, "./article-2/index.html"),
        article_3: resolve(__dirname, "./article-3/index.html")

      }
    }
  }
});
