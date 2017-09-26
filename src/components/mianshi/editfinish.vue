<template>
    <div class="mainWrap">
        <h3>HI: &nbsp; 佩奇</h3>
        <h3>我们已经等候您多时了，终于要见面啦</h3>
        <p>请耐心填写完应聘登记表哦！</p>
        <img src="../../assert/img/edit.png" @click="edit()" class="edit" alt="编辑">
        <div class="info">
             <ul>
                <li v-if="registrationFormInfo.name">
                    <span>姓 &nbsp;&nbsp;名:</span>
                    {{registrationFormInfo.name}}
                </li>
                <li>
                    <span>性 &nbsp;&nbsp;别:</span>
                    {{sex[registrationFormInfo.sex]}}
                </li>
                <li>
                    <span>民 &nbsp;&nbsp;族:</span>
                    {{registrationFormInfo.national}}
                </li>
                <li>
                    <span>出生年月:</span>
                    {{registrationFormInfo.birthday}}
                </li>
                <li>
                    <span>政治面貌:</span>
                    {{politicalStatus[registrationFormInfo.politicalStatus]}}
                </li>
                <li>
                    <span>婚姻状况: </span>
                    {{marryStatus[registrationFormInfo.marryStatus]}}
                </li>
                <li>
                    <span>最高学历: </span>
                    {{education[registrationFormInfo.educationLev]}}
                </li>
                <li>
                    <span>毕业院校: </span>
                    {{registrationFormInfo.graduateSchool}}
                </li>
                <li>
                    <span>所学专业: </span>
                    {{registrationFormInfo.speciality}}
                </li>
                <li>
                    <span>毕业时间: </span>
                    {{registrationFormInfo.graduatetime}}
                </li>
                <li>
                    <span>户口所在地: </span>
                    {{registrationFormInfo.hukouAddress}}
                </li>
                <li>
                    <span>户口性质: </span>
                    {{hukouType[registrationFormInfo.hukouType]}}
                </li>
                <li>
                    <span>身份证号: </span>
                    {{registrationFormInfo.idCardNo}}
                </li>
                <li>
                    <span>手机号: </span>
                    {{registrationFormInfo.phone}}
                </li>
                <li>
                    <span>邮 &nbsp;&nbsp;箱: </span>
                    {{registrationFormInfo.email}}
                </li>
                <li>
                    <span>现住址: </span>
                    {{registrationFormInfo.nowLiveAddress}}
                </li>
                <li>
                    <span>在本公司有无认识的人： </span>
                    {{registrationFormInfo.haveAcquaintance}}
                </li>
                <!-- <li>
                    <span>期望月薪（税前）:  </span>
                    {{registrationFormInfo}}
                </li> -->
            </ul>
            <div class="promise">
                 <p>1.本人承诺上述所有信息都是真实、诚信的，教育证书真实、可靠；在以前工作单位亦无任何违反法律、法规或公司规章制度之行为；如有违反，本人愿承担全部责任，直至辞退并无经济补偿。</p>
                 <p>2.同意爱聚科技有限公司在事先征求本人同意的情况下，对本人过往的工作经历进行核查。</p>
            </div>
            <div class="button" @click="submit()">提交</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'editfinish',
  data() {
      return{
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
      edit() {
          console.log('click')
          
          this.$router.push({name: 'edit', query: {interviewerId: this.interviewerId}})
      },
      submit() {
         var self = this;
         console.log('submit') 
         var method = 'interviewer/submitRegistrationForm',
         param=JSON.stringify({}),
         successd = function(res){
             console.log(res)
         }
         self.$http(method, param, successd);
      }
  },
  mounted(){

  }
}
</script>
<style scoped>
p{
    /* height: 0.3rem;  */
    font-size: 14px;
    font-family:PingFang-SC-Bold;
    color:rgba(102,102,102,1);
    line-height: 18px;
    text-align: center;
}
.edit{
    display: block;
    width: 90%;
    margin: 1rem auto;
    cursor: pointer;
}
ul li{
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    font-family:PingFang-SC-Medium;
    color:rgba(153,153,153,1);
    line-height: 14px;
    height: 0.3rem;
    padding: 0.1rem;

}
ul{
    padding: 0.4rem;
    background: #fff;
}
ul li span{
    min-width: 30%;
}
.promise{
    margin: 0.4rem;
}
.promise p{
    font-size: 12px;
    line-height: 0.4rem;
    text-align: left;
}
</style>

