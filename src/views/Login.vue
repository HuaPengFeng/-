<template>
  <div>
    <div class="layout">
        <!-- 头部 -->
      <div class="loginHead">
        <div class="imgbox">
          <img src="/images/logo.jpg" alt />
        </div>
        <p class="logincontent">小米账号登录</p>
      </div>
      <!-- 登录框 -->
      <div class="inp">
          <div class="phoneinp">
              <input @blur="test" class="phonenumber" type="text" v-model="phoneNum" placeholder="手机号码">
          </div>
          <div class="passwordinp">
              <input class="site" type="text" placeholder="短信验证码">
              <div class="yanzheng">获取验证码</div>
          </div>
      </div>
      <!-- 按钮 -->
      <div class="btn">
          <van-button class="liji" @click="login" type="primary" size="large">立即登录/注册</van-button>
          <van-button class="yonghu" type="primary" size="large">用户名密码登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data:function(){
        return {
            phoneNum:'',
            site:''
        }
    },
    methods:{
        test(){
            if(!(/^1[3456789]\d{9}$/.test(this.phoneNum))){
                this.$toast("请输入正确的手机号码");
                return;
            }
        },
        login(){
            if(this.phoneNum.length==0){
                this.$toast("请输入手机号码");
                return
            }
            this.$store.commit("login",this.phoneNum);
            this.$router.go(-1);
        }
    }
};
</script>
<style lang="scss" scoped>
.layout {
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    background-color: #fff;
    // 顶部图标
    .loginHead {
        width: 100%;
        // height: 127px;
        padding: 30px 0 10px 0;
        .imgbox {
            height: 48px;
            width: 100%;
            text-align: center;
            img {
                width: 48px;
                height: 48px;
                // display: block;
            }
        }
        .logincontent {
            text-align: center;
            font-size: 20px;
            color: rgba(0, 0, 0, 0.8);
            margin : 20px 0 0 0;
        }
    }
    // 输入框
    .inp {
        .phonenumber {
            border: 0;
            border-bottom: 1px solid #ebebeb;
            margin: 0;
            height: 50px;
        }
        .passwordinp {
            display: flex;
            border-bottom: 1px solid #ebebeb;
            .site {
                flex: 7;
                margin: 0;
                height: 50px;
                border: 0;
            }
            .yanzheng {
                flex: 5;
                font-size: 14px;
                color: #2ea5e5;
                text-align: center;
                line-height: 50px;
            }
        }
    }
    // 按钮
    .btn {
        margin: 24px 0;
        
        .liji {
            background-color: #FF6700;
            border: 0;
            border-radius: 6px;
            height: 44px;
            line-height: 44px;
            font-size: 18px;
        }
        .yonghu {
            background-color: #fff;
            color: rgba(0,0,0,0.8);
            border: 0;
            margin-top: 24px;
            border: 1px solid #ebebeb;
            border-radius: 6px;
            height: 44px;
            font-size: 18px;
            line-height: 44px;
        }
    }
}
</style>
