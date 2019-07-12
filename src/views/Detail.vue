<template>
  <div class="detail">
    <van-swipe indicator-color="white">
      <van-swipe-item v-for="(item,i) in date.imgUrl" :key="i">
        <img :src="item" alt>
      </van-swipe-item>
    </van-swipe>
    <h3>{{date.name}}</h3>
    <div class="content">{{date.info}}</div>
    <div class="price">￥{{date.price}}</div>
    <div class="selection">
      <div class="neibu">
        <div class="selectionmain" v-for="(item,i) in date.peizhi" :key="i">
          <div class="img">
            <img :src="item.img" alt>
          </div>
          <div class="title">{{item.title}}</div>
          <div class="contenta">{{item.contenta}}</div>
        </div>
      </div>
    </div>
    <div class="xian"></div>
    <div class="pdetail">
      <div class="detail">商品详情</div>
      <div class="page-lazyload">
        <ul class="page-lazyload-list">
          <li class="page-lazyload-listitem" v-for="(item,i) in date.xq" :key="i">
            <img class="page-lazyload-image" :src="item" lazy="loaded">
          </li>
        </ul>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickKeFu"/>
      <van-goods-action-icon :info="this.$store.state.allVal" icon="cart-o" text="购物车" @click="onClickIcon"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton"/>
      <van-goods-action-button type="danger" text="立即购买" @click="onClickBuy"/>
    </van-goods-action>
    <div class="header">
      <div class="btn" @click="prev">
        <van-icon name="arrow-left"/>
      </div>
    </div>
    <transition>
      <div v-show="flag" class="carselect">
        <div class="close">
          <van-icon name="cross" @click="back"/>
        </div>
        <div class="probox">
          <div class="proImg">
            <img :src="date.imgUrl[yanseindex]" alt>
          </div>
          <div class="proIfon">
            <div class="proprice">
              <span class="newprice">￥{{price}}</span>
              <span class="oldprice">{{oldprice}}</span>
            </div>
            <div class="guige">{{date.name}} {{neicun}} {{yanse}}</div>
          </div>
        </div>
        <!-- <div class="proboxline"></div> -->
        <div class="banbenbox">
          <div class="banben">版本</div>
          <div class="banbenselect">
            <ul>
              <li
                @click="shujuchange(i)"
                :class="{select:neicunindex==i}"
                v-for="(item,i) in shujulist"
                :key="i"
              >
                <span class="left">{{item.neicun}}</span>
                <span class="right">{{item.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="yansebox">
          <div class="yanse">颜色</div>
          <div class="yanseselect">
            <ul>
              <li
                @click="change(i)"
                :class="{select:yanseindex==i}"
                v-for="(item,i) in yanselist"
                :key="i"
              >{{item}}</li>
              <!-- <li>巴厘蓝</li>
              <li>樱花粉</li>-->
            </ul>
          </div>
        </div>
        <div class="buy">
          <div class="buynum">购物数量</div>
          <div class="num">
            <div class="rdd" @click="rdd">-</div>
            <div class="value">{{value}}</div>
            <div class="add" @click="add">+</div>
          </div>
        </div>
        <div class="protect">
          <div class="yiwai">意外保护</div>
          <div class="protectslect">
            <ul>
              <li>
                <span class="fuwu">意外保障服务</span>
                <span class="fuwuprice">69元</span>
              </li>
              <li class="p_l">
                <span class="fuwu">碎屏保障服务</span>
                <span class="fuwuprice">39元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="cartfooter">
          <div class="cart" @click="onCart">加入购物车</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      flag: false,
      value: 1,
      yanse: "",
      neicun: "",
      price: "",
      oldprice: "",
      yanseindex: 0,
      yanselist: "",
      neicunindex: 0,
      shujulist: "",
      date: "",
      dataObj: {
        price: "",
        neicun: "",
        value: "",
        yanse: ""
      }
    };
  },
  methods: {
    onCart() {
      this.$toast("成功加入购物车");
      this.dataObj = {
        select: true,
        name: this.date.name,
        imgUrl: this.date.imgUrl[this.yanseindex],
        price: this.price,
        yanse: this.yanse,
        neicun: this.neicun,
        value: this.value,
        num:Math.floor(Math.random() * (999999999999999999 - 100000000000000000) * 10)
      };
      this.$store.commit("add", this.dataObj);
      this.flag = false;
    },
    onClickKeFu(){
      this.$toast("有待开发，敬请期待");
    },
    onClickIcon() {
      // Toast("点击图标");
      console.log("购物车");
      this.$router.push("/car");
    },
    onClickButton() {
      // Toast("点击按钮");
      this.flag = true;
    },
    onClickBuy() {
      if(this.$store.state.islogin==false){
        this.$router.push("/Login")
        return
      }
      this.dataObj = {
        imgUrl: this.date.imgUrl[this.yanseindex],
        name: this.date.name,
        price: this.price,
        neicun: this.neicun,
        yanse: this.yanse,
        value: this.value,
        num : Math.floor(Math.random() * (999999999999999999 - 100000000000000000) * 10)
      };
      var Goods = [];
      Goods.push(this.dataObj);
      this.$store.commit("cite", Goods);
      // console.log(this.dataObj)
      this.$router.push("/cite");
    },
    prev() {
      this.$router.go(-1);
    },
    back() {
      this.flag = !this.flag;
    },
    add() {
      this.value++;
    },
    rdd() {
      if (this.value == 1) {
        return;
      }
      this.value--;
    },
    change(i) {
      this.yanseindex = i;
      this.yanse = this.yanselist[i];
    },
    shujuchange(i) {
      this.neicunindex = i;
      this.neicun = this.shujulist[i].neicun;
      this.price = this.shujulist[i].price;
      this.oldprice = this.shujulist[i].oldprice;
    },
    getDate() {
      this.$axios.get("/category.json").then(res => {
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].id == this.$route.query.id) {
            this.date = res.data[i];
            this.yanselist = this.date.yanselist;
            this.shujulist = this.date.shujulist;
            this.price = this.date.shujulist[0].price;
            this.odlprice = this.date.shujulist[0].oldprice;
            this.neicun = this.date.shujulist[0].neicun;
            this.yanse = this.yanselist[0];
          }
        }
      });
    }
  },
  created() {
    this.getDate();
  }
};
</script>

<style lang="scss">
.xian {
  width: 100%;
  height: 10px;
  background-color: #fff;
}
.page-lazyload-image {
  display: block;
}
.page-lazyload-list {
  padding-bottom: 50px;
}
.carselect {
  width: 100%;
  height: 80%;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0 14px 44px 14px;
  overflow-y: scroll;
  .close {
    position: absolute;
    top: 8px;
    right: 3px;
    display: block;
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
  }
  .probox {
    width: 100%;
    height: 126px;
    padding-top: 38px;
    overflow: hidden;
    display: flex;
    .proImg {
      width: 88px;
      height: 88px;
      border-top: 1px solid #ebebeb;
      border-left: 1px solid #ebebeb;
      border-right: 1px solid #ebebeb;
      // float: left;
      flex: 4;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .proIfon {
      // float: left;
      margin-top: 21px;
      margin-left: 8px;
      // width: 100%;
      flex: 8;
      .proprice {
        .newprice {
          color: #ff6700;
          font-size: 20px;
        }
        .oldprice {
          margin-left: 4px;
          text-decoration: line-through;
          font-size: 12px;
        }
      }
      .guige {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }
  .banbenbox {
    width: 100%;
    // height: 124px;
    .banben {
      padding-top: 14px;
      font-size: 13px;
      color: rgba(0, 0, 0, 0.87);
    }
    .banbenselect {
      ul {
        li {
          margin-top: 8px;
          padding: 10px 14px;
          font-size: 13px;
          line-height: 7px;
          height: 29px;
          color: rgba(0, 0, 0, 0.87);
          border: 1px solid #ebebeb;
          .left {
            float: left;
            vertical-align: middle;
          }
          .right {
            vertical-align: middle;
            float: right;
          }
        }
      }
    }
  }
  .yansebox {
    width: 100%;
    height: 84px;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    .yanse {
      padding-top: 14px;
      padding-bottom: 7px;
      font-size: 13px;
      color: rgba(0, 0, 0, 0.87);
    }
    .yanseselect {
      ul {
        li {
          width: 54px;
          height: 30px;
          line-height: 30px;
          border: 1px solid #ebebeb;
          margin-left: 10px;
          float: left;
          font-size: 13px;
          color: rgba(0, 0, 0, 0.87);
          text-align: center;
        }
      }
    }
  }
  .buy {
    width: 100%;
    height: 60px !important;
    line-height: 60px;
    border-bottom: 1px solid #ebebeb;
    .buynum {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.87);
      vertical-align: middle;
      float: left;
    }
    .num {
      width: 82px;
      height: 30px;
      float: right;
      line-height: 30px;
      display: flex;
      margin-top: 15px;
      border: 1px solid #ebebeb;
      div {
        text-align: center;
        line-height: 30px;
        flex: 4;
        width: 26px;
        height: 29px;
      }
      .add,
      .rdd {
        font-size: 20px;
        background-color: #ebebeb;
      }
    }
  }
  .protect {
    width: 100%;
    margin-top: 28px;
    .yiwai {
      font-size: 13px;
      color: rgba($color: #000000, $alpha: 0.87);
    }
    .protectslect {
      margin-top: 14px;
      ul {
        li {
          width: 142px;
          height: 29px;
          border: 1px solid #ebebeb;
          float: left;
          padding: 0 8px;
          line-height: 29px;
          font-size: 13px;
          color: rgba($color: #000000, $alpha: 0.87);
        }
        .fuwuprice {
          float: right;
        }
      }
    }
  }
  .proboxline {
    margin-top: 8px;
    height: 10px;
    width: 100%;
    border-right: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    border-left: 1px solid #ebebeb;
    margin-bottom: 14px;
  }
  .cartfooter {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 28px;
    .cart {
      width: 100%;
      height: 100%;
      background: #ff6700;
      border-radius: 14px;
      line-height: 28px;
      text-align: center;
      font-size: 13px;
      color: #fff;
    }
  }
}
.select {
  border: 1px solid #ff6700 !important;
  color: #ff6700 !important;
  height: 29px !important;
}
.p_l {
  margin-left: 8px;
}

img {
  width: 100%;
}
h3 {
  font-weight: normal;
  color: #3c3c3c;
  padding-left: 15px;
  background-color: #fff;
  margin: 0;
  height: 40px;
  line-height: 40px;
}
.content {
  width: 100%;
  word-break: break-all;
  text-align: left;
  padding: 5px 30px 5px 15px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 0.24rem;
  background-color: #fff;
}
.price {
  padding-left: 15px;
  color: #ff6700;
  font-size: 20px;
  position: relative;
  height: 28px;
  line-height: 28px;
  background-color: #fff;
  padding-bottom: 40px;
}
.selection {
  // height: 60px;
  width: 100%;
  overflow-x: scroll;
  background-color: #fff;
  font-size: 13px;
  color: #3c3c3c;
  .neibu {
    width: 740px;
    .selectionmain {
      border-right: 1px solid #9999;
      height: 60px;
      width: 74px;
      display: inline-block;
      .img {
        height: 20px;
        text-align: center;
        img {
          width: 17px;
          height: 17px;
        }
      }
      .title {
        height: 20px;
        line-height: 20px;
        text-align: center;
      }
      .contenta {
        text-align: center;
        height: 20px;
        width:100%;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  } 
}
.pdetail {
  .detail {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #222;
    font-size: 14px;
    border-top: 1px solid #ebebeb;
    background: #fff;
    border-bottom: 1px solid #ebebeb;
  }
}
.header {
  width: 100%;
  height: 44px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 44px;
  .btn {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin: 9px 15px;
    display: inline-block;
    text-align: center;
    line-height: 26px;
    background-color: rgba(0, 0, 0, 0.8);
    .van-icon {
      margin-top: 4px;
      color: #fff;
    }
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: all 1s ease;
}
</style>
