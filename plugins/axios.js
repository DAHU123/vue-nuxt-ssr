export default function ({ store, route, redirect, $axios }) {
  // 基本配置
  $axios.defaults.timeout = 40000

  // 请求拦截
  $axios.onRequest((config) => {
    //const token = Cookie.get('token')
    //config.headers.Authorization = `Bearer ${token}`
  })

  // 响应拦截
  $axios.onResponse((res) => {
    return res
  })

  // 错误统一拦截
  $axios.onError((error) => {
    switch (error.response.status) {
      case 401:
        //location.href = '/login'
        break
    }
  })
}
