import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:8080"
})

instance.interceptors.request.use(
    (config) => {
        console.log("请求前拦截器:" + config)

        config.headers.Accept = "application/json, text/plain, text/html, */*"

        //必须返回 config
        return config
    },
    (error) => {
        console.log("请求前拦截器异常方法: " + error)

        //必须返回一个promise
        return Promise.reject("something wrong")
    }
)

instance.interceptors.response.use(
    (response) => {
        //响应状态码为200要执行的方法
        //处理响应的数据
        //最后要返回response
        console.log("响应前拦截器")
        console.log(response)
        console.log(response.data)

        return response
    },
    (error) => {
        console.log("响应前拦截器异常方法: " + error)

        //必须返回一个promise
        return Promise.reject("something wrong")
    }
)

export default instance