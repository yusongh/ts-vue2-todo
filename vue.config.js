module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        timers: require.resolve("timers-browserify")
      }
    }
  }
}
