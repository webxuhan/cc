import { fetch } from '../utils/fetch'

/**
 * 后台登录
 * */
export const adminLogin = (params) => fetch({
  url: '/admin/login',
  method: 'post',
  data: params
})
