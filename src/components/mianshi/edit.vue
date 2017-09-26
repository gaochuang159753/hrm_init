<template>
  <div class="mainWrap">
      <ul>
          <li>
              <span>姓 &nbsp;&nbsp;名</span>
              <input type="text" v-model="registrationFormInfo.name">
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
      <!-- <mt-picker :slots="slots" value-key="value" :showToolbar='true' @change="onValuesChange"></mt-picker> -->
        <mt-datetime-picker
            v-model="timePicker"
            type="date"
            year-format="{value}."
            month-format="{value}."
            date-format="{value}">
            </mt-datetime-picker>
  </div>
</template>

<script>
import { Picker } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';

export default {
  name: 'edit',
  data(){
      return{
          timePicker: '',
            slots: [
                {
                    flex: 2,
                    values: [{value: '男', keys: 1},{value: '女', keys: 2}],
                    className: 'slot1',
                    textAlign: 'center',
                    showToolbar: '请选择性别',
                    defaultIndex: 1
                }
            ],
          switchValue: true,
          education: ['', '博士', '研究生', 'MBA', '本科', '大专', '大学', '高中', '中专', '技校', '中技', '初中', '小学'],
          politicalStatus: ['', '中共党员', '中共预备党员', '共青团员', '民革党员', '民盟盟员', '民建会员', '民进会员'],
          sex: ['', '男', '女', '未知'],
          hukouType: ['农村', '非农'],
          marryStatus: ['','未婚','2：已婚','离异','保密'],
          interviewerId: '',
            registrationFormInfo: {
                birthday: "1989.12.22",
                educationLev: 1,
                graduateSchool: "湘西民族职业技术学院",
                politicalStatus: 5,
                graduatetime: "2017.09",
                sex: 2,
                idCardNo: "121212121212121212",
                hukouType: 1,
                marryStatus: 1,
                speciality: "服装设计",
                nowLiveAddress: "公元里",
                phone: 12345678901,
                name: "张洁",
                hukouAddress: "大理",
                hukouType: 0,
                national: "汉族",
                email: "412863280@qq.com",
                haveAcquaintance: "有(维尼+表姐妹)",
            }
      }
  },
  methods: {
      save() {
          console.log('save');
      },
      onValuesChange(picker, vakues) {
          console.log(vakues[0])
          if(picker.values[0]) {
            console.log(picker.values[0].keys)
          }        
      },
      openPicker() {
        this.$refs.picker.open();
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

