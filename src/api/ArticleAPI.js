//该模块存放所有跟文章相关的请求方法，每个方法都是按需导入

import request from "@/utils/request";
export const getArticleListAPI = function (param1, param2) {
    return request.get('/article', {
        //get请求的参数放在一个对象的params属性里
        //post请求的参数直接放在一个对象里
        params: {
            _page: param1,
            _limit: param2
        }
    })
    console.log(res.data);
}
//获取文章详情的API方法
export const getArticleAPI = function (id) {
    return request.get('/articleContent'), {
        params: {
            _id: id
        }
    }
}
