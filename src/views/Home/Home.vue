<template>
  <div class="home-container">
    <!--title 和 fixed都是van-nav-bar 封装的自定义属性 props
fixed需要布尔值，需要加v-bind
-->

    <van-nav-bar title="我的新闻" :fixed="true" />
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      :disabled="finished"
      finished-text="没有更多了"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!--  官方建议自定义属性定义的时候用小驼峰式，尽量用连线式  -->
        <ArticleInfo
          v-for="item in articleList"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :cmtCount="item.comm_count"
          :date="item.pubddate"
          :cover="item.cover"
          :id="item.art_id"
        >
        </ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
//按需导入API
import { getArticleListAPI } from "@/api/ArticleAPI";
import ArticleInfo from "@/components/ArticleInfo";

export default {
  data() {
    return {
      //文章列表
      articleList: [],
      //当前页数
      page: 1,
      //每页的新闻条数
      limit: 10,
      //是否正在请求数据可以防止重复请求
      loading: true,
      //是否到达最后一页数据
      finished: false,
      //如果到达最后一页则finished变为true,则不再触发
      refreshing: false,
    };
  },
  methods: {
    //发起get请求服务器文章列表
    async initArticleList(isRefresh) {
      //解构出data脱掉axios外壳
      const { data: res } = await getArticleListAPI(this.page, this.limit);
      if (isRefresh) {
        //下拉刷新
        this.articleList = [...res.data, ...this.articleList];
        this.refreshing = false;
        if (res.data.length === 0) {
          this.finished = true;
        }
      } else {
        //当前进行的是上拉加载
        //不覆盖，拼接
        //[...旧数据,...新数据]
        this.articleList = [...this.articleList, ...res.data];

        //改变loading为false
        this.loading = false;
        if (res.data.length === 0) {
          this.finished = true;
        }
      }
    },
    onLoad() {
      //到底部触发
      console.log("触发了load");
      //页数加1
      this.page++;
      //重新调用api方法
      this.initArticleList(false);
    },
    onRefresh() {
      this.page++;
      this.initArticleList(true);
      //进入该方法自动把refreshing变为true 则不能继续下拉刷新
    },
  },
  //最早可以在这个生命周期发起Ajax请求
  created() {
    this.initArticleList();
  },
  components: { ArticleInfo },
};
</script>

<style scoped lang="less">
.van-nav-bar {
  background-color: #0079fe;
}
/*deep 样式穿透 通过父亲修改子组件的样式*/
/deep/.van-nav-bar__title {
  color: #fff;
}
.home-container {
  padding: 46px 0 50px 0;
}
</style>
