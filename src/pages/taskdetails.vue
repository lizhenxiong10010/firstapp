<template>
   <div class="tasknews">
     <!-- 任务详情 -->
     <div class="tasks">
             <div class="imgtask"><yd-icon name="warn" size=".8rem" color="#FF685D"></yd-icon></div>
             <div class="taskhead">
               <div style="font-size:0.25rem">点击文案彩平点击点击点击</div>
               <div class="fl" style="margin-top:0.3rem;">剩余任务80%</div>
               <div class="fl" style="margin-top:0.3rem;width:1.5rem;margin-left:0.2rem">
                  <yd-progressbar type="line" :progress="progress4" trail-width="10" trail-color="#FE5D51"></yd-progressbar>
                 </div>
             </div>
             <div class="taskmoney">
               <div>0.05元/任务</div>
                <div style="margin-top:0.2rem">0.05元/任务</div>
             </div>
          </div>
        <!-- 基本要求 -->
      <div class="require clearfix">
         <div class="fl" style="color:#ccc">基本要求：</div>
         <div class="fl">
            <div class="requietext">1、支付宝账户已绑定阿里旺旺</div>
            <div class="requietext">2、支付宝账户已通过实名验证</div>
            <div class="requietext">3、支付宝账户芝麻信用分必须大于550分</div>
         </div>
      </div>

      <!-- 申请流程 -->
      <div class="flowpath">
          <div style="text-align: center;height:0.3rem">
         <span style="color:#ccc">-------------</span>
         <span>申请流程</span>
         <span style="color:#ccc">-------------</span>
         </div>

         <div class="pathicon">
           <div style="text-align: center;">
             <div><yd-icon name="home" size=".6rem" color="#FF685D"></yd-icon></div>
             <div style="margin: 0.1rem 0">获得</div>
             <div>申请资格</div>
           </div>
           <div style="text-align: center;">
             <div><yd-icon name="shopcart" size=".6rem" color="#FF685D"></yd-icon></div>
             <div style="margin: 0.1rem 0">下单</div>
             <div>购买商品</div>
           </div>
           <div style="text-align: center;">
             <div><yd-icon name="order" size=".6rem" color="#FF685D"></yd-icon></div>
             <div style="margin: 0.1rem 0">提交</div>
             <div>订单号</div>
           </div>
           <div style="text-align: center;">
             <div><yd-icon name="like" size=".6rem" color="#FF685D"></yd-icon></div>
             <div style="margin: 0.1rem 0">提交</div>
             <div>申请报告</div>
           </div>
           <div style="text-align: center;">
             <div><yd-icon name="shield" size=".6rem" color="#FF685D"></yd-icon></div>
             <div style="margin: 0.1rem 0">审核</div>
             <div>获得奖励</div>
           </div>
         </div>
      </div>
      <!-- 申请规则 -->
      <div class="applyrule">
       <div style="text-align: center;">
         <span style="color:#ccc">-------------</span>
         <span>申请规则</span>
         <span style="color:#ccc">-------------</span>
         </div>
         <div style="margin-top:0.5rem">
            <div>适用流程</div>
            <div class="tryout"><div>1、</div>申请适用，获得适用资格</div>
            <div class="tryout"><div>2、</div>申请适用，获得适用资格申请适用，获得适用资格申请适用，获得适用资格</div>
            <div class="tryout"><div>3、</div>申请适用，获得适用资格申请适用，获得适用资格</div>
            <div class="tryout"><div>4、</div>申请适用，获得适用资格申请适用，获得适用资格申请适用，获得适用资格申请适用，获得适用资格</div>
            <div class="tryout"><div>5、</div>申请适用，获得适用资格申请适用，获得适用资格</div>
          </div>

          <div style="margin-top:0.5rem">
            <div>注意事项</div>
            <div class="tryout"><div>1、</div>申请适用，获得适用资格</div>
            <div class="tryout"><div>2、</div>申请适用，获得适用资格申请适用，获得适用资格申请适用，获得适用资格</div>
            <div class="tryout"><div>3、</div>申请适用，获得适用资格申请适用，获得适用资格</div>
            <div class="tryout"><div>4、</div>申请适用，获得适用资格申请适用，获得适用资格申请适用，获得适用资格申请适用，获得适用资格</div>
            <div class="tryout"><div>5、</div>申请适用，获得适用资格申请适用，获得适用资格</div>
          </div>

          <div style="margin:0.5rem 0 1rem 0">
            <div>温馨提示</div>
            <div class="tryout"><div>1、</div>申请适用，获得适用资格</div>
            <div class="tryout"><div>2、</div>申请适用，获得适用资格申请适用，获得适用资格申请适用，获得适用资格</div>
            <div class="tryout"><div>3、</div>申请适用，获得适用资格申请适用，获得适用资格</div>
            <div class="tryout"><div>4、</div>申请适用，获得适用资格申请适用，获得适用资格申请适用，获得适用资格申请适用，获得适用资格</div>
            <div class="tryout"><div>5、</div>申请适用，获得适用资格申请适用，获得适用资格</div>
          </div>
      </div>

      <!-- 申请按钮 -->
      <div class="button"><yd-button size="large" type="danger" @click.native="handapply()">任务申请</yd-button></div>
   </div>
</template>

<script>
export default {
  data () {
    return {
      progress4: 0.8
    }
  },

  mounted () {
    console.log(this.$route.params.id)
  },

  methods: {
    handapply () {
      console.log(221212121)
    }
  }

}
</script>

<style lang="less" scoped>
.tasknews{
  .tasks{
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      padding:  0.3rem 0.2rem;
      border-bottom: 1px solid #ccc;
      .imgtask{
        width: 1.2rem;
        // background-color: red;
      }
      .taskhead{
        margin-left: -2rem;
        // width: 3.5rem;
      }
    }

    .require{
       background-color: #fff;
       padding: 0.2rem;
       .requietext{
          margin-bottom: 0.2rem;
       }
    }
    .flowpath{
       margin-top: 0.2rem;
       .pathicon{
         background-color: #fff;
         padding: 0.3rem 0.2rem;
          display: flex;
          justify-content: space-between;
       }
    }
    .applyrule{
     margin-top: 0.3rem;
     padding: 0.2rem;
     background-color: #fff;
     .tryout{
        margin-top: 0.2rem ;
        color: #666;
        display: flex;
     }
    }
    .button{
       position: fixed;
       width: 100%;
       bottom: 0px;
    }
}
</style>
