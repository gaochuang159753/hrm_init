<template>
    <div>
        <img src="../../assert/img/right.png" class="edit" alt="404">
        <p>提交成功</p>
        <div  class="contactUs"> 
            <p> 你的信息已提交成功，我们面试官即将前来与您汇面</p>  
            <p style="margin-top: 0.2rem;"> 您可以先浏览我们公司相关信息</p>  
            <p style="margin-top: 0.5rem;"><a :href="href">{{href}}</a> </p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'succeed',
  data() {
      return{
          href: 'https://aijuhr.com'
      }
  }
}
</script>
<style scoped>
img{
    width: 16%;
    margin: 2.7rem auto 0.5rem;
    display: block;
}
p{
    text-align: center;
    font-size:16px;
    font-family:PingFang-SC-Bold;
    color:rgba(31,45,61,1);
}
.contactUs p{
    font-size: 14px;
    margin-top: 0.75rem;
}
</style>