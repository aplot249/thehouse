<template>
  <div class="about">
      <img src="data:image/jpeg;base64,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" alt=""/>
    <div class="portrait">
      <p>用户1</p>
      <p>查看个人资料</p>
    </div>
    <hr />
    <div class="btns">
      <button>我的收藏</button>
      <button>我的房源</button>
      <button>合作洽谈</button>
      <button>建议投诉</button>
      <button>联系我们</button>
      <button>关于我们</button>
      <button>加入我们</button>
    </div>
  </div>
</template>

<script></script>
<style lang="scss">
.about {
  img {
    width: 80px;
    border-radius: 50%;
    float: left;
    margin-left: 10px;
  }
  .portrait {
    // border: 1px solid red;
    span {
      margin-left: auto;
    }
  }
  hr{
    // width:80%;
    margin-right: 20px;
  }
  .btns {
    width: 80%;
    margin: 20px auto;
    display: grid;
    grid-template-rows: repeat(4, 50px);
    grid-template-columns: repeat(2, 50%);
    row-gap: 10px;
    column-gap: 10px;
    button {
      border-radius: 10px;
      background: none;
    }
  }
}
</style>
