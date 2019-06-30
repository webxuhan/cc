import axios from 'axios'

function validateStatus (status) {
  return status >= 200 && status < 300
}
export function fetch (options) {
  return new Promise((resolve, reject) => {
    console.log('process:', process)
    console.log('process.env.baseUrl:', process.env.baseUrl)
    const intance = axios.create({
      timeout: '3000', // 超时时间
      baseURL: process.env.baseUrl,
      validateStatus,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
    // 添加请求拦截器
    intance.interceptors.request.use(function (config) {
      return config
    }, function (error) {
      // 对请求错误做些什么
      if (error.code === 'ECONNABORTED') {
        error.message = '请求超时'
      }
      if (error.config.shouldHandleError) {
        console.log('err:', error.message)
      }
      throw new Error(error.message)
    })
    // 发送请求
    intance(options).then(response => {
      resolve(response)
    }).catch(error => {
      if (error.code === 'ECONNABORTED') {
        error.message = '请求超时'
      }
      if (error.config.shouldHandleError) {
        console.log('err:', error.message)
      }
      throw new Error(error.message)
      // inject(error)
    })
  })
}
