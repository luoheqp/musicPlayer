const path = require("path");

// 客制化
const {
  override,
  addWebpackAlias,
  addPostcssPlugins,
  fixBabelImports,
} = require("customize-cra");
const { overrideProcessEnv } = require("./src/utils/cli");

// Postcss 插件
const PostcssPxToViewport = require("postcss-px-to-viewport");
const PostcssNormalize = require("postcss-normalize");

// 图片压缩
// const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  webpack: override(
    // 添加路径别名配置
    addWebpackAlias({
      "@": path.join(__dirname, "./src"),
      "@r": path.join(__dirname, "./src/reducer"),
    }),

    // 添加 Postcss 配置
    addPostcssPlugins([
      PostcssPxToViewport({
        viewportWidth: 375, // 视图大小
        viewportUnit: "vw", // 视图单位
        unitToConvert: "px", // 需转换的单位
        unitPrecision: 3, // 转换后小数点位数
      }),
      PostcssNormalize({
        forceImport: "sanitize.css",
      }),
    ]),

    // addWebpackPlugin(
    //   new ImageminPlugin({
    //     test: /\.(jpe?g|png|gif|svg)$/i,
    //     cacheFolder: path.resolve(__dirname, "./imgCache"),
    //   })
    // ),

    // 修改环境变量
    overrideProcessEnv({
      // REACT_APP_PROJECT_ENV: JSON.stringify("TIYA"),
    }),

    // 添加 antd
    fixBabelImports("import", {
      libraryName: "antd",
      style: "css",
    })
  ),
  paths: (paths, env) => {
    // 打包时修改默认输出路径以及资源前置路径
    if (env === "production") {
      console.log("=> production mode <=");
      paths.publicUrlOrPath = "./";
      paths.appBuild = path.resolve(__dirname, "dist");
    }

    return paths;
  },
};
