module.exports = {
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/api": {
        target: "http://203.195.140.254:9788",
        changeOrigin: true
      },
      "/image": {
        target: "http://203.195.140.254:9788",
        changeOrigin: true,
        pathRewrite: {
          "^/image": ""
        }
      }
    }
  }
};
