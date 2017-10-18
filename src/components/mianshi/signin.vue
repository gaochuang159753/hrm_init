<template>
    <div class="mainWrap">
        <h3>HI: <span>{{authenticationInfo.interviewerName}}</span></h3>
        <h3>我们已经等候您多时了，终于要见面啦</h3>
        <p>亲爱的你，在面试过程中放好心态、轻松应对，我们面试官都很可爱，不要感到紧张哦！祝你应聘成功，前途无限光明！</p>
        <div class="signBtn" @click="signin">面试签到</div> 
        <footer class="footer">{{authenticationInfo.companyName}}</footer>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  name: 'signin',
  data() {
     return{
        authenticationInfo: {
            // companyName: "景麒水果公司",
            // interviewerId: 13,
            // interviewerName: "张洁"
        },
        companyId:null,
     }
  },
  methods: {
      init() {
          var self = this;
          var method="interviewer/authentication",
            param = JSON.stringify({
                interviewerPhone: this.$route.query.phoneNum,
                companyId:self.companyId
            }),
            succeed = function(res){
                console.log(res);
                self.authenticationInfo = res.data.data.authenticationInfo;
                console.log(errorReminder)
            }
            self.$http(method,param,succeed);
      },
      signin() {
          console.log(this.authenticationInfo)
        this.$router.push({name: 'editfinish', query: {interviewerId: this.authenticationInfo.interviewerId}})
      }
  },
  mounted(){
    this.companyId=localStorage.companyId;
    this.init();
    console.log(this.$route.query)
  }
}
</script>
<style scoped>
.mainWrap{
    margin-top: 1.4rem;
}
p{
    width: 85%;
    font-size:14px;
    font-family:PingFang-SC-Medium;
    color:rgba(51,51,51,1);
    line-height:24px;
    margin: 0 auto;
}
.signBtn{
    width:4rem;
    height: 4rem;
    border-radius: 2rem;
    color: #fff;
    font-size: 26px;
    text-align: center;
    line-height: 4rem;
    background:rgba(255,180,99,1);
    margin: 1.5rem auto;
    cursor: pointer;
}
</style>

