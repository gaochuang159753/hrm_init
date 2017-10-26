<template>
    <div>
        <div id="wrap">
            <div id="main" class="clearfix">
                <div id="content">
                    <h3>{{ interviewInfo.markedWords }}</h3>
                    <h4>{{ interviewInfo.markedWordsInfo }}！</h4>
                    <div class="interviewContent">
                         <ul>
                            <li><span>面试类型:</span>  {{interviewTypeArr[interviewInfo.interviewType]}}</li>
                            <li><span>面试职位:</span> {{interviewInfo.positionName}}</li>
                            <li><span>面试时间:</span> {{interviewInfo.interviewTime}}</li>
                            <li><span>面试地点:</span> {{interviewInfo.interviewAddress}}</li>
                            <li><span>联系人:</span> {{interviewInfo.contractName}}</li>
                            <li><span>联系电话:</span> {{interviewInfo.contractPhone}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <footer id="footer">
            <div>杭州爱聚科技有限公司</div>
        </footer>
    </div>
</template>
<script>

var isAccept = '3';

export default {
    name: 'refusesuccess',
    data() {
        return{
            interviewerId: '',
            companyId:null,
            interviewTypeArr: {
                1: '现场面试',
                2: '电话面试'
            },
            interviewInfo: {
                contractPhone: '',
                interviewTime: "",
                markedWordsInfo: "",
                interviewType: 1,
                companyName: "",
                name: "",
                contractName: "",
                positionName: "",
                interviewAddress: "",
                markedWords: "",
            }
        }
    },
 methods: {
     init(){
        var self = this;
        var method = "interviewer/getInterviewInfo",
            param = JSON.stringify({
                interviewerId: localStorage.interviewerId,
                isAccept: isAccept,
                companyId:localStorage.companyId
            }),
            successd = function(res){
                self.interviewInfo = res.data.data.interviewInfo;
            }
        self.$http(method,param,successd);
     },
  },
   beforeMount(){
      this.interviewerId = localStorage.interviewerId;
      this.companyId = localStorage.companyId;
  },
  mounted () {
      this.init()
  }
}
</script>
<style scoped>
#content h3{
    margin: 0.4rem;
}
h4{
    font-size: 14px;
    text-align: center;
}
.interviewContent{
    width: 90%;
    background-color: #fff;
    font-size: 14px;
    height: 3.4rem;
    margin: 1.2rem auto;
    padding: 0.6rem 0 0 0.3rem;
    line-height: 0.5rem;
}
footer{
    height:18px; 
    font-size:14px;
    color:rgba(102,102,102,1);
    line-height:18px;
    position: fixed;
    bottom: 20px;
    display: inline-block;
    width: 100%;
    text-align: center;  
}
</style>


