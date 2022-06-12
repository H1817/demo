<template>
  <div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <van-cell-group v-if="flag">
        <van-cell
          title="不喜欢这类内容"
          icon="label-o"
          @click="dislike"
        ></van-cell>
        <van-cell
          title="举报作者"
          icon="warning-o"
          @click="changePanel"
        ></van-cell>
        <van-cell title="拉黑作者" icon="delete" @click="banAuthor"></van-cell>
      </van-cell-group>
      <van-cell-group v-else>
        <van-cell icon="arrow-left" @click="flag = true"></van-cell>
        <van-cell v-for="item in reasonList" :key="item.id" @click="hidden">
          {{ item.content }}
        </van-cell>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      flag: true,
      reasonList: [
        { id: 1, content: "不文明" },
        { id: 2, content: "三观不正" },
        { id: 3, content: "涉嫌抄袭" },
      ],
    };
  },
  methods: {
    dislike() {
      this.$toast.success("删除文章成功");
      this.show = false;
    },
    banAuthor() {
      this.$toast.success("拉黑作者成功");
      this.show = false;
    },
    hidden() {
      this.$toast.success("举报成功");
      this.show = false;
    },
    changePanel() {
      this.flag = false;
    },
  },
};
</script>

<style scoped>
.v-cell {
  text-align: center;
}
</style>
