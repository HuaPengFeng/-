<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">分类</h1>
    </header>
    <div class="main">
      <div class="left">
        <ul>
          <li
            v-for="(items,i) in infolist"
            :key="i"
            @click="change(i)"
            :class="['info',{con:index==i}]"
          >{{items}}</li>
        </ul>
      </div>
      <div class="right">
        <div class="maintitle"><span></span> &nbsp; {{title}} &nbsp; <span></span></div>
        <div class="mui-content" style="background-color:#fff">
          <div class="mui-row">
            <div class="mui-col-sm-4 mui-col-xs-4" v-for="(item,i) in contentlist" :key="i">
                <router-link :to="{path:'/detail?id='+item.id}">
                    <img :src="item.imgUrl[0]" alt>
                    <p class="name">{{item.name}}</p>
                </router-link>
            </div>
          </div>
        </div>
      </div>
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
export default {
  data: function() {
    return {
      infolist: ["新品","手机","电视","电脑","家用电器","耳机","音响","路由器"],
      index: 0,
      title:"新品",
      contentlist: []
    };
  },
  methods: {
    change(i) {
      this.contentlist = [];
      this.index = i;
      this.title = this.infolist[i];
      // console.log(axios)
      this.getData();
    },
    getData(){
      this.$axios.get("/category.json").then((res)=>{
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].title==this.title){
            this.contentlist.push(res.data[i]);
          }
        }
      })
    }
  },
  created(){
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.icon-gouwuche {
  position: relative;
  .cpos {
    position: absolute;
    left: 7px;
    top: -6px;
  }
}
.mui-title {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.8)
}
.con {
  color: #ff6700 !important;
  font-size: 16px !important;
  background-color: #fff;
}
.main {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  padding-top: 44px;
  width: 100%;
  height: 100%;
  .left {
    flex: 3;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #ebebeb;
    font-size: 13px;
    li {
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #666;
      font-size: 13px;
    }
  }
  .right {
    flex: 9;
    height: 100%;
    background-color: #fff;
    overflow-y: scroll;
    padding: 0 20px 60px 20px;
    .maintitle {
      font-size: 0.28rem;
      color: #666;
      height: 40px;
      width: 100%;
      line-height: 40px;
      text-align: center;
      margin: 20px 0 0 0;
      background-color: #fff;
      span {
        display: inline-block;
        height: 2px;
        background-color:#e0e0e0;
        line-height: 40px;
        vertical-align: middle;
        width: 18px;
      }
    }
    .mui-col-sm-4 {
      text-align: center;
      background-color: #fff;
      margin-top: 20px;
      img {
        width: 60%;
        height: 60%;
      }
      .name {
        white-space:nowrap; 
        font-size: 12px;
        text-align: center;
        text-overflow: ellipsis;
        color: #666;
        margin: 10px 0 0 0;
        height: 14px;
        line-height: 14px;
        overflow: hidden;
      }
    }
  }
}
</style>
