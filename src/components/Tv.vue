<template>
  <div>
    <div class="product clearfix">
      <div class="productMain" v-for="(item,i) in tvlist" :key="i">
        <router-link :to="{path:'/detail?id='+item.id}" tag="p">
            <img :src="item.imgUrl" alt>
            <div class="content">
              <div class="productName">{{item.name}}</div>
              <div class="productInfo">{{item.info}}</div>
              <div class="price">
                ￥{{item.price}} 起 &nbsp;
                <span class="oldPrice">￥{{item.oldPrice}}</span>
              </div>
            </div>
        </router-link>
      </div>
      <div class="more">
          更多小米电视产品 >
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      tvlist: []
    };
  },
  methods: {
    getData() {
      this.$axios.get("/category.json").then(res => {
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].title == "电视") {
            this.tvlist.push(res.data[i]);
          }
        }
      });
    }
  },
  created() {
      this.getData()
  }
};
</script>
<style lang="scss" scoped>
.product {
  width: 100%;
  margin-top: 2px;
  background-color: #fff;
  position: relative;
  .more {
    width: 100%;
    border-top: 1px solid #ebebeb;
    line-height: 44px;
    text-align: center;
    font-size: 0.44rem;
    color: #333;
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #ebebeb;
    position: absolute;
    bottom: 44px;
    left: 0;
  }
  .productMain {
    text-align: center;
    float: left;
    // display: inline-block;
    flex: 6;
    width: 50%;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    box-sizing: border-box;
    overflow: hidden;
    img {
      width: 100%;
      height: 190px;
      background-color: #ebebeb;
      padding: 20px;
    }
    .content {
      background-color: #fff;
      padding: 2px 12px;
      div {
        margin: 0;
        font-size: 0.28rem;
        height: 14px;
        line-height: 14px;
        text-align: left;
        // padding: 0 10px;
      }
      .productName {
        color: rgba($color: #000000, $alpha: 0.87);
      }
      .productInfo {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #666;
        margin-top: 1px;
      }
      .price {
        margin-top: 1px;
        color: red;
        padding: 0 !important;
        .oldPrice {
          text-decoration: line-through;
          color: #666;
        }
      }
    }
  }
}

.clearfix:after {
    content: "";
    display: block;
    clear: both;
}
</style>
