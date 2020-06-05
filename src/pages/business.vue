 <template>
  <div class="business">
    <div class="headportrait" @click="showimg = true">
      <div class="head">头像</div>
      <div class="portrait">
        <img src="../assets/996dc6e59ae8e6287db34b875a0e4a9dc7c4603c.jpg" alt />
      </div>
      <div style="font-size:25px;color:#ccc;float:right;margin-top:0.2rem">
        <i class="iconfont icon-yduiqianjin"></i>
      </div>
    </div>
    <div class="wechat">
      <div>微信二维码</div>
      <div>
        <i class="iconfont icon-ico" style="font-size:0.8rem;margin-right:0.2rem"></i>
      </div>
    </div>
    <div class="inputlist">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">姓名</span>
          <yd-input slot="right" v-model="form.name" :debug="true" placeholder="请输入姓名"></yd-input>
        </yd-cell-item>

        <yd-cell-item>
          <span slot="left" style="margin-right: 1.4rem;">手机号码</span>
          <yd-input slot="right" v-model="form.phone" regex="mobile" placeholder="请输入手机号码"></yd-input>
        </yd-cell-item>

        <yd-cell-item>
          <span slot="left">职位</span>
          <yd-input slot="right" v-model="form.position" placeholder="请输入职位"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">公司</span>
          <yd-input slot="right" v-model="form.company" placeholder="请输入公司"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">行业</span>
          <yd-input slot="right" v-model="form.industry" placeholder="请输入行业"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">城市</span>
          <yd-input slot="right" v-model="form.city" placeholder="请输入城市"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">个人简介</span>
        </yd-cell-item>
        <yd-cell-group>
          <yd-cell-item>
            <yd-textarea v-model="form.personal_profile" slot="right" maxlength="400"></yd-textarea>
          </yd-cell-item>
        </yd-cell-group>
      </yd-cell-group>
    </div>
    <div class="footbutton">
      <yd-button size="large" type="danger" shape="circle">保存</yd-button>
    </div>

     <!-- 头像，二维码弹出框 -->
     <yd-actionsheet :items="myItems1" v-model="showimg" cancel="取消"></yd-actionsheet>
  </div>
</template>
<script>

export default {
  data () {
    return {
      form: {
        ewm_url: '', // 二维码
        headImgUrl: '', // 头像
        name: '', // 姓名
        phone: '', // 手机
        position: '', // 职位
        company: '', // 公司
        industry: '', // 行业
        city: '', // 城市
        personal_profile: '' // 个人简介

      },
      showimg: false,
      myItems1: [
        {
          label: '拍照',
          callback: () => {
            this.$dialog.toast({mes: '咔擦，此人太帅！'})
            /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
          }
        },
        {
          label: '从相册中选择',
          callback: () => {
            this.$dialog.toast({mes: '看到了不该看到的东西！'})
          }
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.business {
  height: 100vh;
  background-color: #fff;
}
.headportrait {
  padding: 0.1rem 0 0 0.4rem;
  display: flex;
  height: 1.4rem;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  .head {
    height: 1rem;
    line-height: 1rem;
    font-size: 16px;
    font-weight: 600;
  }
  .portrait {
    position: relative;
    right: -2.4rem;
    height: 1rem;
    width: 1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.inputlist {
  padding: 0.2rem 0 0 0.2rem;
  span {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    margin-right: 2rem;
  }
}
.wechat {
  display: flex;
  padding: 0 0 0 0.4rem;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 16px;
  font-weight: 600;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
}
.footbutton {
  // background-color: #ccc;
  position: relative;
    &::before{
      position: absolute;
      width:100%;
      content:"";
      bottom:0;
      left:0;
    }
}
</style>
