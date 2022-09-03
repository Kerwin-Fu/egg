'use strict'

const { Service } = require('egg')

class UserService extends Service {
  async create(userInfo) {
    const result = await this.app.mysql.insert('user', {
      username: userInfo.username,
      password: userInfo.password,
      title: userInfo.title
    })
    const isSuccess = result.affectedRows === 1

    return isSuccess
  }
}

module.exports = UserService
