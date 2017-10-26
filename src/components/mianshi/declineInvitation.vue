<template>
    <div class="mainWrap" v-show="mainShow">
      <div class="mainContent">
            <h3>您确定要拒绝面试邀请吗？</h3>
            <img class="imgBG" src="../../assert/img/1.png">
            <div class="refuseReason">
                <!-- <mt-checklist
                    v-model="reasons"
                    @change="checkChange()"
                    :options="reasonList">
                </mt-checklist> -->
                <mt-radio
                    v-model="reasons"
                    :options="reasonList">
                </mt-radio>
            </div>
            <div class="btn">
                <div class="button okBtn pc" @click="refuse()">确认拒绝</div>
                <div class="button cancelBtn pc" @click="cancel()">取消</div>
                <footer id="footer">
                    <div>杭州爱聚科技有限公司</div>
                </footer>
            </div>
        </div>
    </div>
</template>
<script>


export default {
  name: 'declineInvitation',
  data() {
      return{
          interviewerId: '',
          mainShow: false,
          companyId:null,
          reasons: '',
          reasonList: [],
          isAccept: 3,
        }
  },
  methods: {
      initList(){
          var self = this;
          var method = "interviewer/getNoAcceptReasonList",
            param = JSON.stringify({}),
            successd = function(res){
                var reasonList = res.data.data.reasonList;
                var arr = [];
                for(var key in reasonList){
                    arr.push(reasonList[key])                    
                }
                self.reasonList = arr;
                self.mainShow = true;
            };
                self.$http(method,param,successd);
      },
      refuse(){
           var self = this;
            var method = "interviewer/getInterviewInfo",
            param = JSON.stringify({
                interviewerId: this.interviewerId,
                isAccept: this.isAccept,
                reasons: this.reasons,
                companyId:self.companyId
            }),
            successd = function(res){
                self.$router.push({name:"refusesuccess"});
            }
        self.$http(method,param,successd);
      },
      cancel() {
          this.$router.push({name:"/"});
      }
  },
   beforeMount(){
      this.interviewerId = localStorage.getItem('interviewerid');
      this.companyId = localStorage.getItem('companyid');
  },
  mounted(){
      this.initList();
  }
}
</script>
<style scoped>
.mainWrap{
    width: 100%;
    text-align: center;   
}
.mainWrap h3{
    padding-top: 0.5rem;
    color: black;
}
.mainContent{
    padding-bottom: 20px;
}
.refuseReason{
    background-color: #fff;
    width: 92%;
    padding: 0.3rem 0 0 0.15rem;
    color:rgba(51,51,51,1);
    text-align: left;
    margin: -25px auto 0;
}
.imgBG{
    width: 44%;
    margin: 0.2rem auto 0;
    z-index: 2;
    display: block;
}
.btn{
    margin-top: 1rem;
}
.mint-checkbox-core{
    border-radius: 2px;
}
.button.cancelBtn{
    background: #fff;
    border: 1px solid rgba(90,162,231,1);
    color: black;
    margin-bottom: 50px;
}
footer{
    left: 0;
}
@media only screen and (min-width: 750px){
    .btn{
        margin-left: 10%;
        margin-bottom: 40px;
    }
    .btn .button{
        width: 40%!important;
        float: left;
        margin-top: 0!important;
        margin:  0 2.5%!important;
        border-radius: 0!important;
        height: 50px!important;
        line-height: 50px!important;
    }
    footer{
        position: relative!important;
        top: 40px;
        margin-bottom: 10px;
    }
}
</style>
<style>

</style>




