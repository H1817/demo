//模拟服务器数据模块
import  Mock from 'mockjs'

//生成模拟的随机数据
let  dataList = Mock.mock({
    /*total:"@integer(100,100)",*/
    "data|100":[
        {
            "art_id|+1":1,//随机id号
            "title":"@ctitle(10,20)",//随机中文10到20个字
            aut_id:"@id",//作者id
            comm_count:"@integer(10,10000)",//评论数
            pubddate:"@datetime",//发布时间
            "aut_name":"@cname",//作者姓名
            "is_top|1":true ,//是否置顶
            "cover|1":[//封面类型，在三中情况随机选一种
                {
                    type:0
                },
                {
                    type:1,
                    images:["http://liulongbin.top:8000/resources/images/@integer(1,100).jpg"]
                },
                {
                    type:3,
                    images:[
                        "http://liulongbin.top:8000/resources/images/@integer(1,100).jpg",
                        "http://liulongbin.top:8000/resources/images/@integer(1,100).jpg",
                        "http://liulongbin.top:8000/resources/images/@integer(1,100).jpg"
                    ]
                }
            ]
        }
    ]
})

//获取请求参数去分页
//
const url = "http://localhost:8088/article"

Mock.mock(new RegExp(url+'/*'),"get",(params)=>{
    console.log('params',params.url);

    //利用正则表达式获取所以请求对象
    const obj = {};
    params.url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (obj[k] = v));
    console.log(obj);

    //根据参数分页
    const [page,size] = [obj._page, obj._limit]//结构赋值slice不影响原来的数据
    let newDatalist = dataList.data.slice((page-1)*size,page*size)
    return {
        code:200,
        msg:'success',
        data:newDatalist
     }

})
/*Mock.mock('http://localhost:8088/article',dataList)*/
