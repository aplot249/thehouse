<template>
  <div class="tabbar">
    TheHouse 您的家
  </div>
  <div id="nav">
    <router-link to="/">主页</router-link>
    <router-link to="/liuxue">留学</router-link>
    <!-- <router-link to="/about">客服</router-link> -->
    <router-link to="/shop">商城</router-link>
    <router-link to="/about">我的</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.tabbar{
  font-weight: bolder;
  color: white;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #2F8589;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  z-index: 10;
  position: fixed;
  bottom: 0;
  outline:1px solid;
  border-radius: 10px;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #FFFFFF;
  a {
    display:block;
    width: 100%;
    line-height: 60px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
