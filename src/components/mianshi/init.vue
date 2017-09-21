<template>
    <div class="mainWrap">
            <div class="wrapContent">
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
                <button @click="acceptInvitation(1)">我接受</button>
                <button @click="acceptInvitation(2)" style="margin-top: 20px; background:rgba(249,104,104,1);">我拒绝</button>            
            </div>
        </div>
        
        <footer id="footer">杭州爱聚科技有限公司</footer>
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
    }
  },
}
</script>
<style scoped>
.mainWrap{
    width: 100%;
    min-height: 100%;
    padding-top: 1px;
    font-family:PingFang-SC-Medium;    
}
.title{
    margin-top: 90px;
}
.imgBG{
    position: absolute;
    top: 158px;
    left: 50%;
    margin-left: -90px;
    width: 180px;
    z-index: 2;
}
.interviewContent{
    position: absolute;
    top: 220px;
    background-color: #fff;
    width: 330px;
    left: 50%;
    margin-left: -172.5px;
    height: 170px;
    padding: 30px 0 0 15px;
    color:rgba(51,51,51,1);
    
}
.interviewContent li{
    height: 25px;
}
.btn{
    position: absolute;
    left: 50%;
    margin-left: -150px;
    top: 452.5px;
}
.btn button{
    width:302px;
    height:48px; 
    background:rgba(90,162,231,1);
    border-radius: 24px ; 
    border: none;
    display: block;
    cursor: pointer;
     color: #fff;
     font-size: 17px;
}
footer{
    height:13px; 
    font-size:14px;
    color:rgba(102,102,102,1);
    line-height:18px;
    position: fixed;
    bottom: 20px;
    left: 50%;
    margin-left: -70px;
}
.mainContent{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
}
#footer {position: relative;margin-top: -20px; margin-bottom: 10px; height: 20px;clear:both;color:rgba(102,102,102,1);line-height:18px;}
.clearfix:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
.clearfix:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
.clearfix {display: inline-block;}
</style>

