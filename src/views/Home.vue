<template>
  <div class="homeBody">
    <header class="mui-bar mui-bar-nav">
      <!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> -->
      <h1 class="mui-title">稻米商城</h1>
    </header>
    <mt-swipe :auto="1000">
      <mt-swipe-item v-for="(item,i) in bannerList" :key="i">
        <img :src="item" alt>
      </mt-swipe-item>
    </mt-swipe>
    <div class="icon">
      <img v-for="(item,i) in iconlist" :key="i" :src="item" alt="">
    </div>
    <div class="banner1">
      <div class="left">
        <img class="img1" src="/images/banner1.jpg" alt="">
      </div>
      <div class="right">
        <img class="img2" src="/images/banner2.jpg" alt="">
        <img class="img3" src="/images/banner3.jpg" alt="">
      </div>
    </div>
    <div class="linner"></div>
    <div class="banner2">
      <img src="/images/banner4.jpg" alt="">
    </div>
    <div class="banner3">
      <img src="/images/banner5.jpg" alt="">
    </div>
    <phone></phone>
    <div class="linner"></div>
    <div class="phonebanner">
      <img src="/images/phonebanner1.jpg" alt="">
    </div>
    <div class="linner"></div>
    <div class="tvbanner">
      <img src="/images/tvbanner1.webp" alt="">
    </div>
    <tv></tv>
    <!-- 底部导航 -->
 <div class="mint-tabbar is-fixed">
        <router-link to="/home" tag="li" class="mint-tab-item">
            <div class="mint-tab-item-icon">
                <span class="iconfont icon-shouye"></span>
            </div> 
            <div class="mint-tab-item-label">
                首页
            </div>
        </router-link> 
        <router-link  to="/category" tag="li" class="mint-tab-item">
          <div class="mint-tab-item-icon">
            <span class="iconfont icon-fenlei"></span>
          </div> 
          <div class="mint-tab-item-label">
              分类
          </div>
        </router-link> 
        <router-link  to="/car" tag="li" class="mint-tab-item">
            <div class="mint-tab-item-icon">
                <span class="iconfont icon-gouwuche"><div class="van-info cpos">{{this.$store.state.allVal}}</div></span>
            </div>
            <div class="mint-tab-item-label">
                  购物车
            </div>
        </router-link>
        <router-link  to="/my" tag="li" class="mint-tab-item">
          <div class="mint-tab-item-icon">
            <span class="iconfont icon-wode"></span>
          </div> 
          <div class="mint-tab-item-label">
              我的
          </div>
        </router-link>
    </div>
  <!-- 底部导航 end-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import phone from "../components/Phone";
import tv from "../components/Tv";
export default {
  // name: 'page-navbar',
  data: function() {
    return {
      bannerList: [
        "../assets/img/banner1.jpg",
        "../assets/img/banner2.jpg",
        "../assets/img/banner3.jpg"
      ],
      selected: "1",
      iconlist:[
        "/images/list1.webp",
        "/images/list2.webp",
        "/images/list3.webp",
        "/images/list4.webp",
        "/images/list5.webp",
        "/images/list6.webp",
        "/images/list7.webp",
        "/images/list8.webp",
        "/images/list9.webp",
        "/images/list10.webp"
      ]
    };
  },
  components:{
    phone,
    tv
  }
};
</script>
<style lang="scss">
.icon-gouwuche {
  position: relative;
  .cpos {
    position: absolute;
    left: 7px;
    top: -6px;
  }
}
* {
  padding: 0;
  margin: 0;
}
.homeBody {
  padding-top: 45px;
  padding-bottom: 57px;
  overflow-y: scroll;
  overflow: hidden;
  .mui-title {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.8)
  }
  .icon { //小图标
    width: 100%;
    background-color: #fff;
    img {
      width: 20%;
    }
  }
  .banner1 { //广告图
    height: 226px;
    width: 100%;
    display: flex;
    background-color: #fff;
    overflow: hidden;
    // overflow: hidden;
    .left {
      height: 100%;
      flex: 6;
      margin-right: 2px;
      .img1 {
        height: 100%;
        width: 100%;
        display: block;
      } 
    }
    .right {
      height: 100%;
      flex: 6;
      .img2 {
        margin-bottom: 2px;
      }
      .img2,
      .img3 {
        width: 100%;
        height: 50%;
        display: block;
      }
    }
  }
  .banner2 {
    width: 100%;
    height: 124px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .banner3 {
    width: 100%;
    height: 196px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .linner {
    width: 100%;
    height: 8px;
    background-color: #ebebeb;
  }
  .phonebanner {
    width: 100%;
    height: 124px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .tvbanner {
    width: 100%;
    height: 195px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mint-swipe { //轮播图
  width: 100%;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}

</style>

