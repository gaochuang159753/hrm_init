<template>
    <div>
        <img src="../../assert/img/fail.png" class="fail" alt="404">
        <p>我们任性了，您别介意</p>
        <div  class="contactUs"> 
            <p> 如果您遇到了解决不了的问题，请联系我们</p>  
            <p>电话: <a href="javascript:;">0571-9898989</a></p>
            <p style="margin-top: 0.5rem;">邮箱: <a href="javascript:;">aiju@iyenei.com</a> </p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'fail',

}
</script>
<style scoped>
img{
    width: 24%;
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
@media only screen and (min-width: 750px){
    img{
        margin-top: 1.5rem;
    }
}

</style>