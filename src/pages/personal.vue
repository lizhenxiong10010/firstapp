<template>
  <div class="personal">
    <div class="bgcol"></div>
    <div class="header">
      <div class="topbox">
        <div class="imgpitic">
          <img src="../assets/996dc6e59ae8e6287db34b875a0e4a9dc7c4603c.jpg" alt />
          <div class="name">张三李四</div>
        </div>
        <div class="read">
            <div style="">累计挣得（元）</div>
            <div class="money">0.00<span style="font-size:0.2rem;margin-left:0.2rem">元</span></div>
            <div class="gain">本月挣得：<span style="font-size:0.2rem;margin-left:0.2rem;color:red">+0.00 元</span></div>
        </div>
      </div>
    </div>
    <div class="footlist">
         <div class="listline clearfix" @click="handskip()">
          <div class="icons"><yd-icon name="ucenter" size=".8rem" color="#FF685D"></yd-icon></div>
          <div class="peonew fl">个人信息</div>
          <div style="font-size:0.4rem;color:#ccc;float:right;margin-right:0.2rem">
             <i class="iconfont icon-yduiqianjin"></i>
          </div>
         </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isMember: 0 // 是否是会员
    }
  },
  methods: {
    handskip () {
      this.$router.push({
        name: 'business',
        params: {
          id: '100'
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.personal {
  height: 100%;
  background-color: #fff;
}
.bgcol {
  height: 3.5rem;
  position: relative;
  z-index: 55;
  background-color: #ff7b00;
  border-radius: 0 0 25% 25%;
}
.header {
  height: 3rem;
  position: relative;
  margin: 0rem 0.3rem 0 0.3rem;
  z-index: 66;
  top: -1.3rem;
  background-color: #fff;

  .topbox {
    height: 4.2rem;
    background-color: #fff;
    box-shadow: 0.1px 0px 0.3px 0px #ccc;
    .imgpitic {
      margin: 0 auto;
      width: 1.8rem;
      position: relative;
      top: -0.7rem;
      height: 1.8rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .name {
        font-size: 0.4rem;
        font-weight: 600;
        margin-top: 0.2rem;
        text-align: center;
      }
    }
    .read {
       text-align: center;
      margin: 0 auto;
      padding: 0.4rem 0.4rem 0 0.4rem;
      .money{
        margin: 0 auto;
         line-height: 0.6rem;
         font-size:0.4rem;
         height: 0.6rem;
         width: 2rem;
         background-color: #ff4401;
         color:#fff;
         margin-top:0.2rem
      }
      .gain{
        margin-top: 0.2rem;
      }
    }
  }
}
.footlist {
  height: 5.3rem;
  // margin-top: 0.5rem;
  border-top: 0.3rem solid #f4f4f4;
  .listline{
    height: 1rem;
    line-height: 1rem;
    border-bottom: 2px solid #f4f4f4;
    .icons{
     margin: 0 0.2rem;
     float: left;
    }
    .peonew{
       font-size: 0.4rem;
    }
    // .indicate{
    //   position: relative;
    //   left: 4rem;
    // }
  }
}
</style>
