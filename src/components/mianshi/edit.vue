<template>
  <div class="mainWrap">
      <ul>
          <li>
              <span>姓 &nbsp;&nbsp;名</span>
              <input type="text">
          </li>
          <li>
              <span>性 &nbsp;&nbsp;别</span>
              <input type="text">
          </li>
          <li>
              <span>民 &nbsp;&nbsp;族</span>
              <input type="text">
          </li>
          <li>
              <span>出生年月</span>
              <input type="text">
          </li>
          <li>
              <span>政治面貌</span>
              <input type="text">
          </li>
          <li>
              <span>婚姻状况 </span>
              <input type="text">
          </li>
          <li>
              <span>最高学历 </span>
              <input type="text">
          </li>
          <li>
              <span>毕业院校 </span>
              <input type="text">
          </li>
          <li>
              <span>所学专业 </span>
              <input type="text">
          </li>
          <li>
              <span>毕业时间 </span>
              <input type="text">
          </li>
          <li>
              <span>户口所在地 </span>
              <input type="text">
          </li>
          <li>
              <span>户口性质 </span>
              <input type="text">
          </li>
          <li>
              <span>身份证号 </span>
              <input type="text">
          </li>
          <li>
              <span>手机号 </span>
              <input type="text">
          </li>
          <li>
              <span>邮 &nbsp;&nbsp;箱 </span>
              <input type="text">
          </li>
          <li>
              <span>现住址 </span>
              <input type="text">
          </li>
          <li>
              <span>在本公司有无认识的人： </span>
              <mt-switch v-model="switchValue"></mt-switch>
          </li>
          <li v-show="switchValue == true">
              <span>在本公司认识的人： </span>
              <input type="text">
          </li>
            <li v-show="switchValue == true">
              <span>与你的关系: </span>
          </li>
      </ul>
      <div class="button" @click="save()">确定</div>
  </div>
</template>
<script>
export default {
  name: 'edit',
  data(){
      return{
          switchValue: true
      }
  },
  methods: {
      save() {
          console.log('save');
      }
  }
}
</script>
<style scoped>
.mint-cell-wrapper{
    background: none;
    float: left;
    width: 1px;
}
mainWrap{
    width: 100%;
    display: flex;
    flex-direction: column;
}
ul li{
    display: flex;
    justify-content: flex-start;
    font-size: 16px;
    font-family:PingFang-SC-Medium;
    color:rgba(153,153,153,1);
    line-height: 18px;
    height: 0.3rem;
    padding: 0.3rem;

}
ul{
    background: #fff;
}
ul li{
    border-top: 1px solid #D7D7D7;  
    border-width: 0.5px;
}
ul li:nth-child(1){
    border: none;
}
ul li span{
    min-width: 30%;
}
ul li input{
    background: none;
    outline: none;
    border: none;
}
</style>

