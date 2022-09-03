const  Controller  = require('egg').Controller

class UserController extends Controller {
  async createUser() {
    const { ctx } = this
    const body = ctx.request.body
    const isSuccess = await ctx.service.user.create(body)

    ctx.body = {
      success: isSuccess,
      message: isSUccess ? '用户创建成功' : '用户创建失败'
    }
  }
}

module.exports = UserController
