<template>
<div>
  <div class="top">
    <van-row>
      <van-col span="5" offset="1">
        <img src="@/assets/tx.png" width="70px" height="70px" />
      </van-col>
      <van-col span="5" class="name">
        <p>荣荣荣</p>
        <span>申请认证</span>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-between" class="text">
      <van-col span="6">
        <p>0</p>
        <span>动态</span>
      </van-col>
      <van-col span="6">
        <p>0</p>
        <span>关注</span>
      </van-col>
      <van-col span="6">
        <p>0</p>
      <span>粉丝</span></van-col>
    </van-row>
  </div>
  <van-cell title="编辑资料" icon="edit" is-link ></van-cell>
  <van-cell title="我的消息" icon="chat-o" is-link ></van-cell>
  <van-cell title="退出登录" icon="warning-o" is-link ></van-cell>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.top {
  background-color: #0079fe;
}
img {
  border-radius: 50%;
}
p {
  margin: 10px 0 3px 0;
}
.name :first-child {
  color: whitesmoke;
  font-size: 15px;
  font-weight: bold;
}
.name :last-child {
  background-color: whitesmoke;
  font-size: 6px;
  font-weight: bold;
  border-radius: 2px;
  color: #0079fe;
  padding: 2px 2px 2px 2px;
  border: 0.1px solid silver;
}
.text .van-col{
  text-align: center;
  color: whitesmoke;
}
.van-row {
  padding: 20px 10px 20px 10px;
}
</style>
