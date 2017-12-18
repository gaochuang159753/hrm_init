<template>
    <div>
        <div id="mainWrap">
            <h2 style="">欢迎光临</h2>
            <h2 class="name">{{scanAfterPageInfo.companyName}}</h2> 
            <img class="imgBG" :src="scanAfterPageInfo.logoUrl" v-if="scanAfterPageInfo.logoUrl">
            <img class="imgBG" src="../../assert/img/1.png" v-else>
            <div class="inputWrap">
                <input type="text" v-model="value" placeholder="请输入手机号码">
            </div>
            <div class="button" @click="confirm()">确定</div>
        </div>
    </div>
</template>
<script>

import { Toast } from 'mint-ui';

export default {
  name: 'authentication',
  data() {
      return{
          name: '杭州爱聚科技有限公司',
          value: '',
          companyId: null,
          scanAfterPageInfo:{
              companyName: '',
              logoUrl: null
          }
      }
  },
  mounted(){
      if(this.$route.query.companyId != ''){
         localStorage.setItem('companyid', this.$route.query.companyId);
         this.companyId = this.$route.query.companyId;
      }
      this.init();
  },
    methods: {
        init(){
            var self=this;
            var method="interviewer/scanAfterPageInfo",
                param=JSON.stringify({
                    companyId:localStorage.getItem('companyid')
                }),
                successd=function(res){
                    self.scanAfterPageInfo=res.data.data.scanAfterPageInfo;
                };
            self.$http(method,param,successd);
        },
        confirm() {
            var self=this;
            var reg = /^1[34578][0-9]{9}$/;
            if (!reg.test(this.value)) {
                Toast('请输入正确的手机号');
            } else {
                var method="interviewer/authentication",
                    param=JSON.stringify({
                        interviewerPhone:this.value,
                        companyId:localStorage.getItem('companyid')
                    }),
                    successd=function(res){
                        if(res.data.data.authenticationInfo.result=='true'){
                            self.$router.push({name:'signin',query: {phoneNum:self.value}});
                        }else{
                            Toast(res.data.data.authenticationInfo.errorReminder);
                        }
                         localStorage.setItem('firstsubmit', '0');
                         localStorage.removeItem('detail');
                    };
                self.$http(method,param,successd);
            }
        }
    },
}
</script>

<style scoped>
.imgBG{
    display: block;
    margin: 1rem auto 2.5rem;
    width: 30%;
}
#mainWrap{
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
    line-height: 1rem;
    margin: 0 10%;
    border: none;
    outline: none;
    background: none;
}
</style>

