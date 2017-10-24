<template>
    <div class="mainWrap">
        <h3>HI: &nbsp; {{registrationFormInfo.name}}</h3>
        <h3>我们已经等候您多时了，终于要见面啦</h3>
        <p>请耐心填写完应聘登记表哦！</p>
        <img src="../../assert/img/edit.png" @click="edit()" class="edit" alt="编辑">
        <div class="info">
             <ul>
                <li v-if="registrationFormInfo.name">
                    <span>姓 &nbsp;&nbsp;名:</span>
                    {{registrationFormInfo.name}}
                </li>
                <li v-if="registrationFormInfo.sex">
                    <span>性 &nbsp;&nbsp;别:</span>
                    {{sex[registrationFormInfo.sex]}}
                </li>
                <li v-if="registrationFormInfo.national">
                    <span>民 &nbsp;&nbsp;族:</span>
                    {{registrationFormInfo.national}}
                </li>
                <li v-if="registrationFormInfo.birthday">
                    <span>出生年月:</span>
                    {{registrationFormInfo.birthday}}
                </li>
                <li v-if="registrationFormInfo.politicalStatus">
                    <span>政治面貌:</span>
                    {{politicalStatus[registrationFormInfo.politicalStatus]}}
                </li>
                <li v-if="registrationFormInfo.marryStatus">
                    <span>婚姻状况: </span>
                    {{marryStatus[registrationFormInfo.marryStatus]}}
                </li>
                <li v-if="registrationFormInfo.educationLev">
                    <span>最高学历: </span>
                    {{education[registrationFormInfo.educationLev]}}
                </li>
                <li v-if="registrationFormInfo.graduateSchool">
                    <span>毕业院校: </span>
                    {{registrationFormInfo.graduateSchool}}
                </li>
                <li v-show="registrationFormInfo.speciality">
                    <span>所学专业: </span>
                    {{registrationFormInfo.speciality}}
                </li>
                <li v-show="registrationFormInfo.graduatetime">
                    <span>毕业时间: </span>
                    {{registrationFormInfo.graduatetime}}
                </li>
                <li v-show="registrationFormInfo.hukouAddress">
                    <span>户口所在地: </span>
                    {{registrationFormInfo.hukouAddress}}
                </li>
                <li v-show="registrationFormInfo.hukouType">
                    <span>户口性质: </span>
                    {{hukouType[registrationFormInfo.hukouType]}}
                </li>
                <li v-show="registrationFormInfo.idCardNo">
                    <span>身份证号: </span>
                    {{registrationFormInfo.idCardNo}}
                </li>
                <li v-show="registrationFormInfo.phone">
                    <span>手机号: </span>
                    {{registrationFormInfo.phone}}
                </li>
                <li v-show="registrationFormInfo.email">
                    <span>邮 &nbsp;&nbsp;箱: </span>
                    {{registrationFormInfo.email}}
                </li>
                <li v-show="registrationFormInfo.nowLiveAddress">
                    <span>现住址: </span>
                    {{registrationFormInfo.nowLiveAddress}}
                </li>
                <li v-show="registrationFormInfo.haveAcquaintance != 1 && registrationFormInfo.haveAcquaintance != 0">
                    <span>在本公司有无认识的人： </span>
                    {{registrationFormInfo.haveAcquaintance}}
                </li>
                <li v-show="registrationFormInfo.haveAcquaintance == 1 || registrationFormInfo.haveAcquaintance == 0">
                    <span>在本公司有无认识的人： </span>
                    {{ haveAcquaintance }}
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
          education: ['', '博士', '研究生', 'MBA', '本科', '大专', '大学', '高中', '中专', '技校', '中技', '初中', '小学',,'大专以下','硕士'],
          politicalStatus: ['', '中共党员', '中共预备党员', '共青团员', '民革党员', '民盟盟员', '民建会员', '民进会员', '党员', '团员', '群众'],
          sex: ['', '男', '女', '未知'],
          hukouType: ['农村', '非农'],
          marryStatus: ['','未婚','已婚','离异','保密'],
          interviewerId: '',
          registrationFormInfo: {
                // birthday: "1989.12.22",
                // educationLev: 1,
                // graduateSchool: "湘西民族职业技术学院",
                // politicalStatus: 5,
                // graduatetime: "2017.09",
                // sex: 2,
                // idCardNo: "121212121212121212",
                // hukouType: 1,
                // marryStatus: 1,
                // speciality: "服装设计",
                // nowLiveAddress: "公元里",
                // phone: 12345678901,
                // name: "张洁",
                // hukouAddress: "大理",
                // hukouType: 0,
                // national: "汉族",
                // email: "412863280@qq.com",
                // haveAcquaintance: "有(维尼+表姐妹)",
           }
      }
  },
  methods: {
      init() {
        var self = this;
        console.log(this.$route.query);
        this.interviewerId = this.$route.query.interviewerId;
        if(this.$route.query.registrationFormInfo){
            this.registrationFormInfo = this.$route.query.registrationFormInfo;
            return;
        }
        console.log(this.$route.query.registrationFormInfo);
         var method = 'interviewer/signSuccessList',
         param=JSON.stringify({interviewerId: this.interviewerId}),
         successd = function(res){
             self.registrationFormInfo = res.data.data.registrationFormInfo;
         }
         self.$http(method, param, successd);
      },
      edit() {
          this.$router.push({name: 'edit', query: {interviewerId: this.interviewerId}})
      },
      submit() {
        var self = this;
        if(this.registrationFormInfo.haveAcquaintance != 1 && this.registrationFormInfo.haveAcquaintance != 2){
            var reg = /[\(\)\+]/g;
            let arr = this.registrationFormInfo.haveAcquaintance.split(reg);
            this.registrationFormInfo.haveAcquaintance = arr[0] == '有'? '1': '0';
            this.registrationFormInfo.friendRemaik = arr[2] ? arr[1] + '+' + arr[2] : arr[1];
        }
        this.registrationFormInfo.interviewerId = this.interviewerId;
        this.registrationFormInfo.companyId = localStorage.companyId;
         var method = 'interviewer/submitRegistrationForm',
          param=JSON.stringify(
             this.registrationFormInfo
         ),
         successd = function(res){
             self.$router.push({path: 'succeed'})
         }
         self.$http(method, param, successd);
      }
  },
  computed: {
      haveAcquaintance() {
          var switchval = this.registrationFormInfo.haveAcquaintance? '有': '无';
          if(this.registrationFormInfo.friendRemaik){
               return switchval + '(' + this.registrationFormInfo.friendRemaik + ')';
          }else{
              return switchval
          }
      }
  },
  mounted(){
      this.init();
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

