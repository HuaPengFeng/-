<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="/images/loader1.jpg" alt>
          </div>
        <div class="swiper-slide swiper-slide">
          <img src="/images/loader2.jpg" alt>
        </div>
        <div class="swiper-slide">
          <img src="/images/loader3.jpg" alt>
          <router-link to="/Gg" tag="button" class="btn">立即体验</router-link>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.swiper-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
}
.swiper-pagination {
    margin-bottom: 44px;
}
.swiper-slide {
  text-align: center;
  img {
    width: 100%;
    height:100%;
  }
  .btn {
      position: absolute;
      left: 50%;
      margin-left: -50px !important;
      bottom: 100px;
      margin: 0;
      padding: 0;
      width: 100px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 20px;
      background-color: rgb(51, 197, 190);
  }
}
</style>
