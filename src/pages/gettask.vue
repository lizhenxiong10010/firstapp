<template>
  <div class="tasklist">
       <div class="imglist">
         <yd-slider autoplay="4000">
        <yd-slider-item>
                <img src="../assets/996dc6e59ae8e6287db34b875a0e4a9dc7c4603c.jpg">
        </yd-slider-item>
        <yd-slider-item>
                <img src="../assets/996dc6e59ae8e6287db34b875a0e4a9dc7c4603c.jpg">
        </yd-slider-item>
        <yd-slider-item>
                <img src="../assets/996dc6e59ae8e6287db34b875a0e4a9dc7c4603c.jpg">
        </yd-slider-item>
    </yd-slider>
       </div>
       <div class="footlist">
          <div class="taskday">
            <yd-icon style="vertical-align:middle;" name="star" size=".4rem" color="#FF685D"></yd-icon>
              <span style="vertical-align:middle;">今日任务列表</span>
          </div>

          <div class="tasks" @click="handtasknews()">
             <div class="imgtask"><yd-icon name="warn" size=".8rem" color="#FF685D"></yd-icon></div>
             <div class="taskhead">
               <div style="font-size:0.25rem">点击文案彩平点击点击点击</div>
               <div class="fl" style="margin-top:0.3rem;font-size:0.2rem">剩余任务80%</div>
               <div class="fl" style="margin-top:0.3rem;width:1.5rem;margin-left:0.2rem">
                  <yd-progressbar type="line" :progress="progress4" trail-width="10" trail-color="#FE5D51"></yd-progressbar>
                 </div>
             </div>
             <div class="taskmoney">
               <div>0.05元/佣金</div>
                <div style="margin-top:0.2rem">0.05元/任务</div>
             </div>
          </div>

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

       </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      switch1: false,
      progress4: 0.8
    }
  },
  methods: {
    handtasknews () {
      this.$router.push({
        name: 'taskdetails',
        params: {
          id: '100'
        }
      })
    }
  }

}
</script>
<style lang="less" scoped>
.imglist img {
  width: 100%;
}
.footlist{
    margin-top: 0.3rem;
    .taskday{
      line-height: 0.5rem;
      height: 0.5rem;
      margin-left: 2.5rem;
    }
    .tasks{
      display: flex;
      justify-content: space-between;
      margin: 0.3rem 0.2rem;
      padding:  0.1rem 0;
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
}
</style>
