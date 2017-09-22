<template>
    <div class="mainWrap">
        <h3>HI: &nbsp; 佩奇</h3>
        <h3>我们已经等候您多时了，终于要见面啦</h3>
        <p>请耐心填写完应聘登记表哦！</p>
        <img src="../../assert/img/edit.png" @click="click()" class="edit" alt="编辑">
        <div class="info">
             <ul>
                <li>
                    <span>姓 &nbsp;&nbsp;名:</span>
                    佩奇
                </li>
                <li>
                    <span>性 &nbsp;&nbsp;别:</span>
                    女
                </li>
                <li>
                    <span>民 &nbsp;&nbsp;族:</span>
                    汉
                </li>
                <li>
                    <span>出生年月:</span>
                    2010.10.12
                </li>
                <li>
                    <span>政治面貌:</span>
                    无
                </li>
                <li>
                    <span>婚姻状况: </span>
                    未婚
                </li>
                <li>
                    <span>最高学历: </span>
                    本科
                </li>
                <li>
                    <span>毕业院校: </span>
                    北京大学
                </li>
                <li>
                    <span>所学专业: </span>
                    产品经理
                </li>
                <li>
                    <span>毕业时间: </span>
                    2010.10.12
                </li>
                <li>
                    <span>户口所在地: </span>
                    杭州
                </li>
                <li>
                    <span>户口性质: </span>
                    农村
                </li>
                <li>
                    <span>身份证号: </span>
                    110
                </li>
                <li>
                    <span>手机号: </span>
                    187681801878
                </li>
                <li>
                    <span>邮 &nbsp;&nbsp;箱: </span>
                    108879919@qq.com
                </li>
                <li>
                    <span>现住址: </span>
                    杭州市西湖区公元里7幢
                </li>
                <li>
                    <span>在本公司有无认识的人： </span>
                    有（维尼+表姐妹)
                </li>
                <li>
                    <span>期望月薪（税前）:  </span>
                    10K
                </li>
            </ul>
            <div class="promise">
                 <p>1.本人承诺上述所有信息都是真实、诚信的，教育证书真实、可靠；在以前工作单位亦无任何违反法律、法规或公司规章制度之行为；如有违反，本人愿承担全部责任，直至辞退并无经济补偿。</p>
                 <p>2.同意爱聚科技有限公司在事先征求本人同意的情况下，对本人过往的工作经历进行核查。</p>
            </div>
            <div class="button">提交</div>
        </div>
    </div>
  
    
</template>
<script>
export default {
  name: 'editfinish',
  methods: {
      click() {
          console.log('click')
      }
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

