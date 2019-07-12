<template>
    <div>
        <div class="banner">
            <img src="/images/banner.jpg" alt="">
            <div @click="next" class="remain">跳过({{num}})</div>
        </div>
    </div>
</template>
<script>
import { setInterval, clearInterval } from 'timers';
export default {
    data:function(){
        return {
           num:3,
           timer:null
        }
    },
    methods:{
        next(){
            this.$router.push("/Home")
        }
    },
    created(){
        this.timer = setInterval(()=>{
            if(this.num==0){
                this.$router.push("/Home")
            }else {
                this.num --
            }
        },1000)
    },
    beforeDestroy(){
        clearInterval(this.timer)
    }
}
</script>
<style lang="scss">
.banner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
    }
    .remain {
        position: absolute;
        top: 20px;
        right: 20px;
    }
}
</style>
