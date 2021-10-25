const {CracoAliasPlugin, configPaths} = require('react-app-rewire-alias');
const aliasMap = configPaths('./jsconfig.paths.json');

module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    esLint: {
      enable: true
    },
    plugins: [
      {
        plugin: CracoAliasPlugin,
        options: {alias: aliasMap}
      }
    ]
  }