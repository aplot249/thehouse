<template>
    <div id="swipper">
        <img alt="Vue logo1" v-for:="img in image_list" :src="img"/>
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
    import {computed, ref} from "vue";

    export default {
        name: "shop",
        components: {},
        setup() {
            let image_list = [
                "https://therenthouse.oss-accelerate.aliyuncs.com/20211215173913-4632.png",
                "https://therenthouse.oss-accelerate.aliyuncs.com/20211215173929-3434.png"
            ]

            return {image_list};
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

    h3 {
        text-align: left;
        padding-left: 20px;
    }

    .btns {
        margin: auto;
        width: 90%;
        display: grid;
        grid-template-rows: repeat(2,50px);
        grid-template-columns: repeat(2,50%);
        grid-gap: 10px;
        button {
            outline: none;
            margin: 10px 0;
            height: 50px;
            width: 100%;
            background: none;
            border-radius: 10px;
        }
    }
</style>
