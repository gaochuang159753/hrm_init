<template>
    <div>
        <div id="wrap">
            <div id="main" class="clearfix">
                <div id="content">
                    <h3>拒绝面试邀请</h3>
                    <h4>您已经拒绝了本次面试邀请，期待下次与您合作！</h4>
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
                </div>
            </div>
        </div>
        <footer id="footer">
            <div>杭州爱聚科技有限公司</div>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'refusesuccess',
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
  }
}
</script>
<style scoped>
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


