<template>
  <div>
      <div id="mainWrap">
         <img class="imgBG" src="../../assert/img/lose.png">
         <p>{{interviewInfo.markedWords}}</p>
         <p style="margin: 0.4rem 0 1rem;">如果您遇到了解决不了的问题，请联系我们：</p>
         <div class="phone_wrap">
                <p style="margin-top: 0.2rem;">邮箱：{{interviewInfo.email}}</p>
         </div>
      </div>
       <footer id="footer">
            <div>{{interviewInfo.companyName}}</div>
       </footer>
  </div>
</template>
<script>


export default {
  name: 'loseefficacy',
  data() {
        return{
            interviewInfo: {
                companyName: "",
                markedWords: "",
                email: ""
            }
        }    
    },
    methods: {
        init(){
            var self=this;
            var method="interviewer/getInterviewInfo",
                param=JSON.stringify({
                    interviewerId: localStorage.getItem('interviewerid'),
                    companyId:localStorage.getItem('companyid'),
                    isAccept: '-1'
                }),
                successd=function(res){
                    self.interviewInfo = res.data.data.interviewInfo;
                };
                self.$http(method,param,successd);
        }
    },
    mounted(){
        this.init();
    }  
}
</script>

<style scoped>
#mainWrap{
    width: 100%;
    text-align: center;
    font-size: 14px;
}
.phone_wrap{
    text-align: center;
}
.imgBG{
    width: 15%;
    /* display: block; */
    margin: 2rem auto 0.8rem;
}
</style>

