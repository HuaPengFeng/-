<template>
  <div>
    <!-- 头部登录 -->
    <div class="Myheader">
      <div class="headerBody">
        <img src="/images/my.png" alt="">
        <div class="name">
          <router-link v-show="!this.$store.state.islogin" to="login" class="login">登录&nbsp;/</router-link>
          <router-link v-show="!this.$store.state.islogin" to="register" class="register">&nbsp;注册</router-link>
          <p v-show="this.$store.state.islogin">{{this.$store.state.phoneNum}}</p>
        </div>
      </div>
    </div>
    <!-- 头部登陆 end -->
    <!-- 订单 -->
    <div class="citebox">
      <router-link to="/cite"><div class="citeleft">我的订单</div></router-link>
      <div class="citeright">全部订单</div>
      <span class="iconnext"></span>
    </div>
    <!-- 订单 end-->
    <!-- 付款，收货 -->
    <div class="citeDetail">
      <div class="detailbox">
        <div class="dfk">
          <div class="icon1"></div>
          <span>待付款</span>
        </div>
      </div>
      <div class="detailbox">
        <div class="dsh">
          <div class="icon2"></div>
          <span>待收货</span>
        </div>
      </div>
      <div class="detailbox">
        <div class="thx">
          <div class="icon3"></div>
          <span>退换修</span>
        </div>
      </div>
    </div>
    <!-- 付款，收货 end-->
    <div class="vip">
      会员中心
      <span class="iconnext"></span>
      <div class="bd"></div>
      <img src="/images/vip.png" alt="" class="vipimg">
    </div>
    <div class="vip">
      我的优惠
      <span class="iconnext"></span>
      <img src="/images/youhui.png" alt="" class="vipimg">
    </div>
    <div class="linner"></div>
    <div class="vip">
      服务中心
      <span class="iconnext"></span>
      <div class="bd"></div>
      <img src="/images/fuwu.png" alt="" class="vipimg">
    </div>
    <div class="vip">
      小米之家
      <span class="iconnext"></span>
      <img src="/images/xiaomi.png" alt="" class="vipimg">
    </div>
    <div class="linner"></div>
    <div class="vip">
      F码通道
      <span class="iconnext"></span>
      <img src="/images/fma.png" alt="" class="vipimg">
    </div>
    <div class="linner"></div>
    <div class="vip">
      设置
      <span class="iconnext"></span>
      <img src="/images/shezhi.png" alt="" class="vipimg">
    </div>
    
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
            <div class="pos mint-tab-item-label">
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
export default {};
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
  color:#666;
}
.mui-scroll {
    // padding-top: 44px;
    ul {
        margin-top: 20px;
    }
}
.Myheader {
  overflow: hidden;
  width: 100%;
  height: 70px;
  background-color: #FF6700;
  background-image: url("/images/mybg.png");
  background-size: 100% 100%;
  overflow: hidden;
  .headerBody {
    width: 100%;
    height: 42px;
    line-height: 42px !important;
    margin-top: 14px;
    overflow: hidden; 
    img {
      width: 42px;
      height: 42px;
      margin: 0 5px 0 20px;
    }
    .name {
        display: inline-block;
        font-size: 13px;
        height: 13px;
        line-height: 13px;
        overflow: hidden;
        margin-bottom: 12px;
        .login {
          color: #fff !important;
        }
        .register {
          color: #fff !important;
        }
        p {
          color: #fff;
        }
    }
  }
}
.citebox {
  height: 35px;
  width: 100%;
  line-height: 36px;
  color: rgba($color: #000000, $alpha: 0.8);
  font-size: 0.24rem;
  background-color: #fff;
  // border-bottom: 1px solid #ccc;
  padding: 0 24px 0 14px;
  position: relative;
  .iconnext {
    position: absolute;
    right: 12px;
    top: 13px;
  }
  .citeleft {
    float: left;
  }
  .citeright {
    float: right;
  }
}
.citeDetail {
  height: 76px;
  width: 100%;
  display: flex;
  background-color: #fff;
  font-size: 12px;
  color: rgba($color: #000000, $alpha: 0.8);
  margin-bottom: 8px;
  .detailbox {
    flex: 4;
    text-align: center;
    line-height: 76px;
  }
  .dfk,
  .dsh,
  .thx {
    width: 36px;
    height: 42px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
  }
  .icon1 {
    background-image: url("/images/dfk.png");
    background-size: 100% auto;
    height: 20px;
    width: 20px;
    margin: 0 8px 8px 8px;
  }
  .icon2 {
    background-image: url("/images/dsh.png");
    background-size: 100% auto;
    height: 20px;
    width: 20px;
    margin: 0 8px 8px 8px;
  }
  .icon3 {
    background-image: url("/images/thx.png");
    background-size: 100% auto;
    height: 20px;
    width: 20px;
    margin: 0 8px 8px 8px;
  }
  span {
    position:absolute;
    bottom: 0;
    left: 0;
    width: 36px;
    height: 12px;
    line-height: 12px;
  }
}
.vip {
  width: 100%;
  height: 45px;
  padding: 0 24px 0 46px;
  font-size: 12px;
  line-height: 45px;
  background-color: #fff;
  position: relative;
  .iconnext {
    position: absolute;
    right: 12px;
    top: 18px;
  }
  .vipimg {
    width: 20px;
    height: 20px;
    position:absolute;
    left: 11px;
    bottom: 13px;
  }
}
.iconnext::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  border-right: 1px solid #333;
  border-bottom: 1px solid #333;
  transform: rotate(-45deg)
}
.linner {
  width: 100%;
  height: 9px;
}
.bd {
  height: 1px;
  background-color: #ccc;
  width: calc(100% - 46px);
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
