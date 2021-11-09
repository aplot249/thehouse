<template>
  <div id="swipper">
    <img
      alt="Vue logo1"
      :src="'https://thehouse28.com//resources/' + change_img + '.png'"
    />
  </div>
  <h3>我在国外</h3>
  <div class="btns">
    <button>国内优选日用品</button>
    <button>国内优选零食</button>
    <button>国内优选药品保健品</button>
  </div>
  <h3>我在国内</h3>
  <div class="btns">
    <button>国外奶粉日用品保健品</button>
    <button>国外奢侈品</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "shop",
  components: {},
  setup() {
    let count = ref(28);
    let change_img = computed(() => count.value);

    setInterval(() => {
      count.value = count.value == 28 ? 29 : 28;
    }, 2000);

    return { change_img };
  },
};
</script>

<style lang="scss" scoped>
#swipper {
  img {
    width: 100%;
    height: 200px;
  }
}
h3{
  text-align: left;
  padding-left: 20px;
}
.btns{
  width: 100%;
  // height: 500px;
  // border: 1px solid red;
  // box-sizing: border-box;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  button{
    outline:none;
    margin: 10px 0;
    height: 50px;
    width: 45%;
    background:none;
    border-radius: 10px;
  }
}
</style>
