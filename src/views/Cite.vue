<template>
  <div class="cite">
    <div class="mui-navbar-inner mui-bar mui-bar-nav mui-navbar-center">
      <button
        type="button"
        class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"
      >
        <span class="mui-icon mui-icon-left-nav" @click="prev"></span>
      </button>
      <h1 class="mui-center mui-title">订单</h1>
    </div>
    <div class="line"></div>
    <!-- <div class="people">
      添加收货地址
      <van-icon class="next" name="arrow" />
    </div>-->
    <!-- <div class="address">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>-->
    <div class="addressBox" @click="gotoAddress">
      新增收货地址
    </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @edit="onEdit"
    />
    <div class="bigbox" v-for="(item,i) in citeList" :key="i">
      <div class="citenumber">
        <span class="dingdan">订单编号：</span>
        <span class="num">{{item.num}}</span>
      </div>
      <div class="box">
        <div class="proImg">
          <img :src="item.imgUrl" alt>
        </div>
        <div class="proContent">
          <div class="proname">{{item.name}} {{item.neicun}} {{item.yanse}}</div>
          <div class="proprice">单价:{{item.price}}元</div>
          <div class="profooter">
            <div class="dele">x{{item.value}}</div>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar :price="AllPrice*100" button-text="去付款"/>
    
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      citeList: [],
      AllPrice: 0,
      addressArr :[],
      id:'',
      name:'',
      tel:'',
      address:'',
      addressObj:{
        id:'',
        name:'',
        tel:'',
        address:'',
      },
      chosenAddressId: '1',
      list: [],
    };
  },
  methods: {
    onEdit() {
      console.log(this)
    },
    prev() {
      this.$router.go(-1);
    },
    calc() {
      for (var i = 0; i < this.citeList.length; i++) {
        this.AllPrice += this.citeList[i].price * this.citeList[i].value;
      }
    },
    gotoAddress(){
      this.$router.push("/Address")
    },
    getAddress(){
        for(var i=0;i<this.$store.state.addresslist.length;i++){
          this.id = String(i+1);
          this.name = this.$store.state.addresslist[i].name;
          this.tel = this.$store.state.addresslist[i].tel;
          this.address = this.$store.state.addresslist[i].province+this.$store.state.addresslist[i].city+this.$store.state.addresslist[i].county+this.$store.state.addresslist[i].addressDetail;
          this.addressObj = {
            id:this.id,
            name:this.name,
            tel:this.tel,
            address:this.address,
            index:i
          }
          this.addressArr.push(this.addressObj)
        }
    }
  },
  created() {
    this.citeList = this.$store.state.Citelist;
    this.calc();
    console.log(this.citeList);
    this.getAddress();
    this.list = this.addressArr;
    console.log(this.list)
  }
};
</script>
<style lang="scss" scoped>
.van-address-list__add {
  display: none;
}
.cite {
  padding-bottom: 50px;
}
.people {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #111;
  padding: 20px 20px;
  background-color: #fff;
  margin-top: 10px;
  background: url("/images/bd1.png") 0 0 repeat-x;
  .next {
    float: right;
    margin-top: 12px;
  }
}
.line {
  height: 44px;
}
.bigbox {
  margin-top: 10px;
  .citenumber {
    height: 30px;
    background-color: #fff;
    line-height: 30px;
    padding-left: 10px;
  }
  .box {
    border-top: 1px solid #ebebeb;
    width: 100%;
    overflow: hidden;
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
    .proImg {
      width: 88px;
      height: 88px;
      // float: left;
      flex: 4;
      img {
        display: block;
        width: 100%;
        height: 100%;
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
        color: rgba(0, 0, 0, 0.8);
      }
      .proprice {
        font-size: 13px;
        color: #999;
      }
      .dele {
        float: right;
        width: 26px;
        height: 26px;
        margin-right: 10px;
        img {
          width: 26px;
          height: 26px;
          display: block;
        }
      }
    }
  }
}
.addressBox {
  height: 46px;
  line-height: 46px;
  width:100%;
  background-color: #fff;
  padding: 0 24px 0 14px;
  border-bottom: 1px solid #ccc;
}
.van-address-list {
  padding: 0;
}
</style>
