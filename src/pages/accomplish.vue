<template>
  <div>
    <yd-tab>
      <yd-tab-panel label="待工作">
        <div style="width: 120px;height: 120px;">
          <yd-progressbar :progress="progress1" trail-width="4">{{progress1 * 100}}%</yd-progressbar>
        </div>
        <div>
          <yd-progressbar type="line" :progress="progress4" trail-width="5" trail-color="#FE5D51">
          </yd-progressbar>
        </div>
      </yd-tab-panel>
      <yd-tab-panel label="待验收">我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。</yd-tab-panel>
      <yd-tab-panel label="已完结">时间是一切财富中最宝贵的财富。</yd-tab-panel>
    </yd-tab>
  </div>
</template>
<script>
export default {
  data () {
    return {
      progress1: 0.5,
      progress4: 0.5
    }
  },
  mounted () {
    console.log(this.$route.params.id)
  }
}
</script>
<style lang="less" scoped>
</style>
