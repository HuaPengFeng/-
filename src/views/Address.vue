<template>
  <div>
      <van-nav-bar title="地址信息" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      ref="refs"
    />
  </div>
</template>
<script>
import areaList from "../assets/js/area";
export default {
  data() {
    return {
      areaList,
      searchResult: []
    };
  },

  methods: {
    onSave() {
      console.log(this.$refs.refs.data)
      this.$store.commit("address",this.$refs.refs.data)
      this.$router.go(-1)
    },
    onDelete() {
      Toast("delete");
    },
    onClickLeft(){
      this.$router.go(-1)
    }
  }
};
</script>
