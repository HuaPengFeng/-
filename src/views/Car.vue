<template>
  <div class="car">
    <div class="mui-navbar-inner mui-bar mui-bar-nav mui-navbar-center">
      <button
        type="button"
        class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"
      >
        <span class="mui-icon mui-icon-left-nav" @click="prev"></span>
      </button>
      <h1 class="mui-center mui-title">购物车</h1>
    </div>
    <div v-show="!this.$store.state.islogin" class="gotoLogin">
      <div class="Login">登录后享受更多优惠</div>
      <div @click="gotoLogin" class="goLogin">去登录<van-icon class="sanjiao" name="arrow" /></div>
    </div>
    <div class="cartproduct" v-for="(item,i) in prolist" :key="i">
      <div class="radios">
        <div @click="Cselect(i)" :class="['choose', {'unchecked':!item.select,'checked':item.select}]"></div>
      </div>
      <div class="proImg">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="proContent">
        <div class="proname">{{item.name}} {{item.neicun}} {{item.yanse}}</div>
        <div class="proprice">单价:{{item.price}}元</div>
        <div class="profooter">
          <div class="num">
            <div class="rdd" @click="rdd(i)">-</div>
            <div class="value">{{item.value}}</div>
            <div class="add" @click="add(i)">+</div>
          </div>
          <div class="dele" @click="del(i)"><img src="/images/del.png" alt=""></div>
        </div>
      </div>
    </div>
    <div class="carBody" v-show="flag">
      <span class="icon">购物车还是空的</span>
      <router-link to="/home" tag="span" class="find">去逛逛</router-link>
    </div>
    <div class="youlike">
      <img src="../assets/img/like.jpg" alt>
    </div>
    <div class="product">
      <div class="mui-content">
        <div class="mui-row">
          <div class="center mui-col-sm-6 mui-col-xs-6" v-for="(item,i) in youlikelist" :key="i">
           <router-link :to="{path:'/detail?id='+item.id}">
              <img :src="item.imgUrl" alt>
              <p>{{item.name}}</p>
              <p class="price">￥{{item.price}}</p>
           </router-link>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar :price="allPrice*100" button-text="提交订单" @submit="onSubmit"/>
    
    <!-- 底部导航 -->
    
    <!-- 底部导航 end-->
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      flag: false,
      allPrice:0,
      prolist: [],
      youlikelist:[],
      citelist:[],
      index:[]
    };
  },
  methods:{
    gotoLogin(){
      this.$router.push("/Login")
    },
    Cselect(i){
      this.prolist[i].select = !this.prolist[i].select
    },
    prev(){
      this.$router.go(-1)
    },
    onSubmit(){
      if(this.$store.state.islogin==false){
        this.$router.push("/Login")
        return
      }
      for(var i =0;i<this.prolist.length;i++){
        if(this.prolist[i].select == true){
          this.citelist.push(this.prolist[i])
          // this.prolist.splice(i, 1);
          this.index.push(i);
        }
      }
      if(this.citelist.length==0){
        this.$toast("你还没有商品");
        return
      }
      this.$store.commit("cite",this.citelist)
      this.$router.push("/Cite")
      for(var i = 0;i<this.index.length;i++){
        this.prolist.splice(this.index[i], 1);
        this.$store.state.allVal = 0;
        this.$store.state.allVal += this.prolist[i].value;
      }
    },
    add(i){
      this.prolist[i].value ++;
    },
    rdd(i){
      if(this.prolist[i].value==1){
        return
      }
      this.prolist[i].value --;
      
    },
    calc(){
      for(var i=0;i<this.prolist.length;i++){
        if(this.prolist[i].select == true){
          this.allPrice += this.prolist[i].price*this.prolist[i].value
        }
      }
    },
    del(i){
      this.prolist.splice(i,1)
    },
    getDate(){
      this.prolist = this.$store.state.CartList;
      console.log(this.prolist)
    },
    youlikedata(){
      this.$axios.get("/category.json").then((res)=>{
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].title=="手机"){
            this.youlikelist.push(res.data[i]);
          }
        }
      })
    }
  },
  updated(){
    if(this.prolist.length == 0){
      this.flag = true;
    }
  },
  created(){
    this.youlikedata();
    this.getDate();
    this.calc();
    if(this.prolist.length == 0){
      this.flag = true;
    }
  },
  beforeUpdate(){
    this.allPrice = 0;
    this.calc();
  }
};
</script>
<style lang="scss">
.center {
  text-align: center;
  background-color: #fff;
}
.car {
  padding-bottom: 57px;
  padding-top: 44px;
  .gotoLogin {
    width: 100%;
    height: 46px;
    background-color: #fff;
    padding: 0 24px 0 14px;
    border-bottom: 1px solid #ebebeb;
    .Login {
      float: left;
      height: 46px;
      line-height: 46px;
      font-size: 14px;
      color: rgba($color: #000000, $alpha: 0.8);
    }
    .goLogin {
      float: right;
      height: 46px;
      line-height: 46px;
      font-size: 12px;
      color: #999;
      position: relative;
      .sanjiao {
        position: absolute;
        right: -14px;
        top: 16px;
      }
    }
  }
  .mui-title {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.8);
  }
  .cartproduct {
    display: flex;
    height: 100px;
    margin-bottom: 10px;
    background-color: #fff;
    .radios {
      flex:1;
      height: 100%;
      text-align: center;
      line-height: 100px;
      padding: 0 2px;
      .choose {
        
      }
      .checked {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url("/images/check_press.png") no-repeat;
        background-size: 100% 100%;
      }
      .unchecked {
         display: inline-block;
        width: 18px;
        height: 18px;
        background: url("/images/check_normal.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .proImg {
      flex: 3;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 100px;
      text-align: center;
      img {
        width: 80px;
        height: 80px;
        vertical-align: middle;
        border: 1px solid #ebebeb;
      }
    }
    .proContent {
      flex: 9;
      width: 100%;
      height: 100px;
      padding: 10px 0 0px 10px;
      line-height: inherit;
      .proname {
        width: 70%;
        font-size: 13px;
        line-height: initial;
        color: rgba(0, 0, 0, 0.8)
      }
      .proprice {
        font-size: 13px;
        color: #999;
      }
      .num {
        width: 82px;
        height: 26px;
        float: left;
        line-height: 26px;
        display: flex;
        border: 1px solid #ebebeb;
        div {
          text-align: center;
          line-height: 25px;
          flex:4;
          width: 25px;
          height: 25px;
        }
        .add,
        .rdd {
          font-size: 20px;
          background-color: #f8f2f2;
        }
        .value {
          font-size: 14px;
          color: #333;
        }
      }
      .dele {
        float: right;
        width: 26px;
        height: 26px;
        margin-right: 10px;
        display: block;
        img {
          width: 26px;
          height: 26px;
          display: block;
        }
      }
    }
  }
  .carBody {
    padding: 8px;
    height: 52px;
    width: 100%;
    background: #ebebeb;
    text-align: center;
    line-height: 42px;
    .icon {
      display: inline-block;
      height: 35px;
      line-height: 35px;
      text-align: center;
      padding-left: 42px;
      padding-right: 8px;
      font-size: 0.2rem;
      color: rgba(0, 0, 0, 0.27);
      background: url("../assets/img/car.png") no-repeat 0;
      background-size: auto 100%;
    }
    .find {
      display: inline-block;
      border: 1px solid #ccc;
      height: 22px;
      width: 60px;
      font-size: 0.2rem;
      text-align: center;
      line-height: 22px;
    }
  }
  .youlike {
    height: 52px;
    width: 100%;
    img {
      display: block;
      height: 52px;
      width: 100%;
    }
  }
  .product {
    img {
      height: 158px;
      width: 158px;
      padding: 20px;
      background-color: #fff;
    }
    p {
      margin-bottom: 0;
      text-align: left;
      padding-left: 10px;
      background-color: #fff;
      text-align: center;
    }
    .price {
      color: red;
      padding-bottom: 0;
      text-align: center;
    }
  }
}
</style>
