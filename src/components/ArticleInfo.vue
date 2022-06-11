<template>
  <div>
    <van-cell class="container">
      <!-- 使用 van-cell 组件的 title 插槽 -->
      <template #title>
        <div class="title-box">
          <span>{{ title }}</span>
          <!--    按需展示一张或多张缩略图，这里不能用v-if和v-else，因为这两个UI结构不是平级的      -->
          <img
            :src="cover.images[0]"
            alt=""
            class="thumb"
            v-if="cover.type === 1"
          />
        </div>
        <!-- 三张缩略图的盒子 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img
            :src="item"
            alt=""
            class="thumb"
            v-for="(item, index) in cover.images"
            :key="index"
          />
        </div>
      </template>
      <!-- 使用 van-cell 组件的 label 插槽 -->
      <template #label>
        <div class="label-box">
          <span
            >作者 {{ author }} &nbsp;&nbsp; {{ cmtCount }} 评论 &nbsp;&nbsp;
            发布日期 {{ date | formatDate }}</span
          >
          <van-icon name="cross" @click="openPopup"></van-icon>
        </div>
      </template>
    </van-cell>
    <Popup ref="popupRef"></Popup>
  </div>
</template>

<script>
import Popup from "./Popup.vue";

export default {
  props: {
    //新闻标题
    title: {
      type: String,
      default: "",
    },
    //新闻作者
    author: {
      type: String,
      require: true,
    },
    //新闻评论数
    cmtCount: {
      type: [Number, String],
      require: true,
    },
    //新闻发布日期
    date: {
      type: String,
    },
    //缩略图的对象，里面有type和images
    cover: {
      type: Object,
    },
    id: {
      type: Number,
    },
  },
  methods: {
    openPopup() {
      this.$refs.popupRef.show = true;
    },
  },
  filters: {
    formatDate(val) {
      let date = new Date(val);
      let now = new Date();
      let interval = (now - date) / 1000 / (24 * 60 * 60);
      if (interval >= 365) {
        return Math.floor(interval / 365) + "年前";
      } else {
        return `${date.getFullYear()}年${
          date.getMonth() + 1
        }月${date.getDate()}日`;
      }
    },
  },
  components: { Popup },
};
</script>

<style scoped>
.label-box {
  /* 弹性布局 */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 缩略图的样式 */
.thumb {
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.thumb-box {
  display: flex;
  justify-content: space-between;
}
.container {
  background-color: rgb(231, 229, 229);
  margin-bottom: 5px;
}
</style>
