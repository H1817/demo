//此模块用来封装axios请求的根路径
import axios from 'axios';
const request = axios.create({
    //请求服务器地址的根路径
    baseURL:'http://localhost:8088'
})

//默认导出该模块
export default request
