<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <!-- <mt-header fixed title="欢迎光临"></mt-header> -->
    <!-- <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search> -->
    <!-- 顶部导航栏 end -->
    <!-- 信息区域 -->
    <!-- <transition mode="out-in"> -->
        <router-view></router-view>
    <!-- </transition>  -->
    <!-- 信息区域 end -->
    <!-- 底部导航 -->
   
    <!-- 底部导航 end -->
  </div>
</template>
<script>
export default {
  data:function(){
    return {
      msg:"aaa"
    }
  }
}
</script>
<style lang="scss">
* {
      padding: 0;
      margin: 0;
  }
.app-container {
  overflow:hidden;
}
.mint-tab-item{
	color:#818181;
}
.mint-tab-item.is-selected{
	color:#FF6700 !important;
}
.iconfont.con{
	font-size: 22px;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%)
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
