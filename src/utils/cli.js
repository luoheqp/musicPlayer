// 返回指定 plugin
const findWebpackPlugin = (plugins, pluginName) =>
  plugins.find((plugin) => plugin.constructor.name === pluginName);

// 修改环境变量
exports.overrideProcessEnv = (value) => (config) => {
  const plugin = findWebpackPlugin(config.plugins, "DefinePlugin");
  const processEnv = plugin.definitions["process.env"] || {};

  plugin.definitions["process.env"] = {
    ...processEnv,
    ...value,
  };

  return config;
};
