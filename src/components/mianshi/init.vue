<template>
    <div class="mainWrap">
        <div class="wrapContent clearfix">
            <div class="title">
                <h3>HI: &nbsp;{{person.name}}</h3>
                <h3>我们诚挚邀请您参加本公司面试</h3>
            </div>
            <img class="imgBG" src="../../assert/img/1.png">
            <div class="interviewContent">
                <ul>
                    <li><span>面试类型:</span>  {{person.type}}</li>
                    <li><span>面试职位:</span> {{person.position}}</li>
                    <li><span>面试时间:</span> {{person.time}}</li>
                    <li><span>面试地点:</span> {{person.location}}</li>
                    <li><span>联系人:</span> {{person.linkman}}</li>
                    <li><span>联系电话:</span> {{person.phonenum}}</li>
                </ul>
            </div>
            <div class="btn">
                <div class="button pc" @click="acceptInvitation(1)">我接受</div>
                <div class="button pc" @click="acceptInvitation(2)" style="margin-top: 20px; background:rgba(249,104,104,1);">我拒绝</div>            
            </div>
        </div>
        <footer id="footer">
            <div>杭州爱聚科技有限公司</div>
        </footer>
    </div>
        
    </div>
</template>
<script>
export default {
    name: 'init',
    data() {
        return{
            person: {
                name: '佩奇',
                type: '现场面试',
                position: '产品经理',
                time: '2017-08-19  14:00',
                location: '杭州市西湖区西西湖苑忽2号',
                linkman: '维尼',
                phonenum: '18768180165'
            }
        }
    },
 methods: {
    acceptInvitation(e){
      console.log(e);
      var self=this;
      var method="eliminateReason/addEliminateReason",
            param=JSON.stringify({
                eliminateReason:1,
                remark:1
            }),
            successd=function(res){
                console.log(res);
            };
        self.$http(method,param,successd);
    }
  }
}
</script>
<style scoped>
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
    }
    footer{
        position: relative!important;
        top: 40px;
        margin-bottom: 10px;
    }
}
.mainWrap{
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.wrapContent{
    width: 100%;
    margin-bottom: 20px;
}
.title{
    margin-top: 0.5rem;
}
.imgBG{
    width: 44%;
    margin: 0.2rem auto 0;
    z-index: 2;
    display: block;
}
.interviewContent{
    width: 90%;
    background-color: #fff;
    font-size: 14px;
    height: 3.4rem;
    margin: -0.5rem auto;
    padding: 0.6rem 0 0 0.3rem;
    line-height: 0.5rem;
}
.btn{
    margin-top: 1rem;
}
.btn .button{
    width:80%;
    height:1rem; 
    background:rgba(90,162,231,1);
    border-radius: 0.5rem; 
    border: none;
    display: block;
    cursor: pointer;
     color: #fff;
     font-size: 17px;
     margin: 0 auto;
     text-align: center;
     line-height: 1rem;
} 


</style>

