/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1662034801454_7697'

  // add your middleware config here
  config.middleware = []

  config.mysql = {
    mysql: {
      client: {
        host: '127.0.0.1',
        port: '3006',
        user: 'root',
        password: '123456',
        database: 'kerwin_test'
      },
      app: true,
      agent: false
    }
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig
  }
}
