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

var isAccept = '3';
var interviewerI = localStorage.getItem('interviewerId') || '12';

export default {
  name: 'declineInvitation',
  data() {
      return{
          interviewerId: '',
          mainShow: false,
          reasons: '',
          reasonList: [],
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
          this.$router.push({name:"refusesuccess",query:{reasons: this.reasons, interviewerId: this.interviewerId}});
      },
      cancel() {
          this.$router.push({name:"/"});
      }
  },
   beforeMount(){
      this.interviewerId = this.$route.query.interviewerId;
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
</style>
<style>

</style>




