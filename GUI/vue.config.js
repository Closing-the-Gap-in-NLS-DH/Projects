const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/Closing-The-Gap-In-Non-Latin-Script-Data/" : "/",
})
