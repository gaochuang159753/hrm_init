<template>
    <div>
        <div id="wrap">
            <div id="main" class="clearfix">
                <div id="content">
                    <h3>拒绝面试邀请</h3>
                    <h4>您已经拒绝了本次面试邀请，期待下次与您合作！</h4>
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
var interviewerId = localStorage.getItem('interviewerId') || '12';

export default {
    name: 'refusesuccess',
    data() {
        return{
             interviewTypeArr: {
                1: '现场面试',
                2: '电话面试'
            },
            interviewInfo: {
                contractPhone: 12345678901,
                interviewTime: "2017-09-21 20:17:38",
                markedWordsInfo: "您已经接受了本次面试邀请，请您准时来面试哦！",
                interviewType: 1,
                companyName: "景麒水果公司",
                name: "张洁",
                contractName: "啊啊",
                positionName: "产品",
                interviewAddress: "广告公司",
                markedWords: "接受面试邀请",
            }
        }
    },
 methods: {
     init(){
        var self = this;
            var method = "interviewer/getInterviewInfo",
            param = JSON.stringify({
                interviewerId: interviewerId,
                isAccept: isAccept,
                reasons: this.$route.params.reasons
            }),
            successd = function(res){
                console.log(res.data.data.interviewInfo);
                self.interviewInfo = res.data.data.interviewInfo;
            }
            self.$http(method,param,successd);
     },
    acceptInvitation(e){
      console.log(e);
    }
  },
  mounted () {
      console.log();
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


