<template>
  <div class="home">
    <div id="swipper">
      <img
        alt="Vue logo1"
        :src="'https://thehouse28.com//resources/' + change_img + '.png'"
      />
    </div>
    <div id="content">
      <input value="学校/城市/房源ID" />
      <div id="tabs">
        <button>伦敦</button>
        <button>伯明翰</button>
        <button>曼彻斯特</button>
        <button>格拉斯哥</button>
      </div>
      <div id="images">
        <div>
          <img src="https://thehouse28.com//resources/5.jpg" alt="" />
          <span>帝国理工学院</span>
        </div>
        <div>
          <img src="https://thehouse28.com//resources/6.jpg" alt="" />
          <span>伦敦大学学院（UCL）</span>
        </div>
        <div>
          <img src="https://thehouse28.com//resources/7.jpg" alt="" />
          <span>伦敦政治经济学院</span>
        </div>
        <div>
          <img src="https://thehouse28.com//resources/8.jpg" alt="" />
          <span>伦敦国王学院</span>
        </div>
      </div>
      <button class="more">更多伦敦房</button>
      <h3>我是房东</h3>
      <div id="tabs">
        <button>房源发布</button>
        <button>房源托管</button>
        <button>公寓转租</button>
      </div>
      <h3>我是租客</h3>
      <div id="tabs">
        <button>免费找房</button>
        <button>公寓转租</button>
        <button>定制找房</button>
      </div>
      <h3 class="last">学生公寓</h3>
      <div id="images">
        <div>
          <img src="https://thehouse28.com//resources/5.jpg" alt="" />
          <span>帝国理工学院</span>
        </div>
        <div>
          <img src="https://thehouse28.com//resources/6.jpg" alt="" />
          <span>伦敦大学学院（UCL）</span>
        </div>
        <div>
          <img src="https://thehouse28.com//resources/7.jpg" alt="" />
          <span>伦敦政治经济学院</span>
        </div>
        <div>
          <img src="https://thehouse28.com//resources/8.jpg" alt="" />
          <span>伦敦国王学院</span>
        </div>
        <button class="more">更多伦敦学生公寓</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ref, computed, onMounted } from "vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    let count = ref(1);
    let change_img = computed(() => count.value);

    setInterval(() => {
      count.value = count.value == 1 ? 2 : 1;
    }, 2000);

    return { change_img };
  },
};
</script>
<style scoped lang="scss">
.home {
  overflow: scroll;
  padding-bottom: 60px;
}
button {
  outline: none;
}
#swipper {
  img {
    width: 100%;
    height: 200px;
  }
}
#content {
  position: relative;
  input {
    position: absolute;
    top: -25px;
    right: calc(40% / 2);
    height: 40px;
    width: 60%;
    outline: solid;
  }
  #tabs {
    position: relative;
    top: -10px;
    height: 40px;
    padding-top: 40px;
    display: flex;
    justify-content: space-around;
    // margin: 0 15px ;
    display: flex;
    button {
      // padding: 0;
      // width:80px;
      height: 32px;
      // margin: 8px 0;
      border-radius: 5px;
      background: none;
      border: 1px solid;
    }
  }
  #images {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    // margin: 10px 0;
    div {
      margin-bottom: 5px;
      width: 45%;
      position: relative;
      background-color: #f5f5f5;
      padding-bottom: 30px;
      border: 1ps solid red;
      img {
        width: 100%;
      }
      span {
        display: inline-block;
        height: 30px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0;
      }
    }
  }
  button.more {
    width: 80%;
    height: 40px;
    margin: 10px 0;
    background: #fff;
    border-radius: 10px;
  }
  h3 {
    margin-bottom: 0;
    text-align: left;
    padding-left: 20px;
  }
  h3.last {
    margin-bottom: 25px;
  }
}
</style>
