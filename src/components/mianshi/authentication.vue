<template>
    <div>
        <div id="mainWrap">
            <h2 style="">欢迎光临</h2>
            <h2 class="name">杭州爱聚科技有限公司</h2> 
            <img class="imgBG" src="../../assert/img/lose.png">
            <div class="inputWrap">
                <input type="text" v-model="value" placeholder="请输入手机号码">
            </div>
            <div class="button" @click="confirm">确定</div> </div>
    </div>
    
  
</template>
<script>
export default {
  name: 'authentication',
  data() {
      return{
          name: '杭州爱聚科技有限公司',
          value: ''
      }
  },
  mtthod: {
      confirm() {
          console.log('confirm')
      }
  }

}
</script>

<style scoped>
.imgBG{
    display: block;
    margin: 1rem auto 2.5rem;
    width: 30%;

}
#mainWrap{
    /* text-align: center; */
    width: 100%;
}
h2{
    margin: 0.6rem 0 0 0.2rem; 
    font-size: 25px; 
    color:rgba(90,162,231,1); 
}
.name{
    margin: 0.1rem 0 0 0.2rem;
    font-size: 14px;
}
.inputWrap{
    font-size: 17px;
    border: 1px solid lightblue;
    width: 80%;
    height: 1rem;
    border-radius: 0.5rem;
    margin: 0 auto;
    display: block;
}
input{
    margin: 0.3rem 10%;
    border: none;
    outline: none;
    background: none;
}
</style>

