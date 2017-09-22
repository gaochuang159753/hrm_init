<template>
    <div class="mainWrap">
        <h3>HI: &nbsp; 佩奇</h3>
        <h3>我们已经等候您多时了，终于要见面啦</h3>
        <p>请耐心填写完应聘登记表哦！</p>
        <img src="../../assert/img/edit.png" @click="click()" class="edit" alt="编辑">
    </div>
    
</template>
<script>
export default {
  name: 'fillininformation',
  methods: {
      click() {
          console.log('click')
      }
  }
}
</script>
<style scoped>
.mainWrap{
    width: 100%;
}
p{
    height: 0.3rem; 
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
</style>

