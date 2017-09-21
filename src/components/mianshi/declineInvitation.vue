<template>
  <div class="mainWrap">
      <div class="mainContent clearfix">
          <h3>您确定要拒绝面试邀请吗？</h3>
            <img class="imgBG" src="../../assert/img/1.png">
            <div class="refuseReason">
                <mt-checklist
                    v-model="value"
                    :options="options">
                </mt-checklist>
            </div>
                <div class="okBtn" @click="refuse()">确认拒绝</div>
                <div class="cancelBtn">取消</div>
            </div>
       <footer id="footer">杭州爱聚科技有限公司</footer>
  </div>
</template>
<script>
export default {
  data() {
      return{
          value: ['已找到新工作'],
          options: ['已找到新工作', '面试时间有冲突，需要再约', '对面试公司的地点或公司条件不满意', '个人原因', '其他'],
        }
  },
  methods: {
      refuse(){
          console.log('确认拒绝')
      }
  }
}
</script>
<style scoped>
.mainWrap{
    width: 100%;
    text-align: center;   
}
.mainContent{
    padding-bottom: 20px;
}
#footer {position: relative;margin-top: -20px; margin-bottom: 10px; height: 20px;clear:both;color:rgba(102,102,102,1);line-height:18px;}
.clearfix:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
.clearfix:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
.clearfix {display: inline-block;}
.refuseReason{
    background-color: #fff;
    width: 285px;
    padding: 30px 0 0 15px;
    color:rgba(51,51,51,1);
    text-align: left;
    margin: -25px auto 0;
}
.mainWrap h3{
    padding-top: 80px;
}
.mainWrap img{
    margin-top: 38px;
    width: 180px;
    z-index: 2;
}
</style>

<style> 
  .mint-checkbox-core{
    border-radius: 2px;
}
.okBtn, .cancelBtn{
    width:302px;
    height:48px; 
    background:rgba(90,162,231,1);
    border-radius: 24px;
    color: #fff;
    border: none;
    cursor: pointer;
    margin: 20px auto 0;
    line-height: 48px;
}
.cancelBtn{
    background: #fff;
    border: 1px solid rgba(90,162,231,1);
    color: black;
    margin-bottom: 50px;
}
footer{
    /* height:13px; 
    font-size:14px;
    color:rgba(102,102,102,1);
    line-height:18px;
    position: fixed;
    bottom: 20px;
    left: 50%;
    margin-left: -70px; */
}
</style>


