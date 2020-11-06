import axios from 'axios'
const baseURL=process.env.NODE_ENV==='development'?'http://localhost:9527':'url'

const service = axios.create({
  baseURL,
  timeout:5000
})

service.interceptors.request.use(config=>{
  config.headers={
    'x-Token':'asdfdfjbksfjksbjfb'
  }
  return config
})

service.interceptors.response.use(config=>{
  if(config.status>=200&&config.status<=300){ // axios包装的status
    const res = config.data
    if(res.code===200){ // 后端返回的code
      return res
    }else{
      return Promise.reject(res)
    }
  }
  return Promise.reject(config)
})


export default service