
import Axios from 'axios';
import Util from '../script/util.js';
import md5 from 'js-md5';
import { Toast } from 'mint-ui';
export default {
  install(Vue, options) {
    Vue.prototype.getData = function () {
      console.log('我是插件中的方法');
    }
    // Vue.prototype.$http = function (method, param, succeed) {
    //   var self = this;
    //   // self.fullscreenLoading = true;
    //   var params = new URLSearchParams();
    //   params.append("method",method);
    //   params.append("param",param);
    //   params.append("sign",md5('method' + method + "param" + param + "ecbao"));
    //   Axios({
    //     method: 'post',
    //     url: Util.url,
    //     data: params
    //     // Util.url,
    //     // 'method=' + method
    //     // + '&param=' + param
    //     // + '&sign=' + md5('method' + method + "param" + param + "ecbao")
    //   }).then(function (res) {
    //     // self.fullscreenLoading = false;
    //     if (res.data.code == 0) {
    //       succeed(res);
    //     } else {
    //       // 没有登录
    //       if(res.data.code == 400){
    //         location.href = "https://hr.ecbao.cn/login/";
    //       }else if(res.data.code == 5555){
    //         self.$router.push('/nopower');
    //       }
    //       self.$message({
    //         message: '操作失败，原因：' + res.data.message,
    //         type: 'error'
    //       });
    //     }
    //   }).catch(function (err) {
    //   });
    // }
    Vue.prototype.$http = function (method, param, succeed) {
      var self = this;
      // self.fullscreenLoading = true;
      param = JSON.parse(param);
      for(var key in param){
        if(param[key] === ""){
          delete param[key]
        }
      }
      param = JSON.stringify(param);
      Axios.post(Util.url,
        'method=' + method
        + '&param=' + encodeURIComponent(param)
        + '&sign=' + md5('method' + method + "param" + param + "ecbao")
      ).then(function (res) {
        // self.fullscreenLoading = false;
        if (res.data.code == 0) {
          succeed(res);
        } else {
          self.$router.push('/fail');
          Toast(res.data.message);
        }
      }).catch(function (err) {
      });
    }
    Vue.prototype.$date = function (date,type) {
      if (date == "" || date == null) {
        return;
      } else {
        var d = new Date(date);
        var newdate = "";
        if (type == "month") {
          newdate = d.getFullYear()+"." + (d.getMonth() > 8 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1));
        } else if(type=="time"){
          newdate = d.getFullYear() + '-'
          + (d.getMonth() > 8 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1)) + '-'
          + (d.getDate() > 9 ? d.getDate() : "0" + (d.getDate()))
          +" "+(d.getHours()>9?d.getHours():"0"+d.getHours())+":"
          +(d.getMinutes()>9?d.getMinutes():"0"+d.getMinutes())+":"
          +(d.getSeconds()>9?d.getMinutes():"0"+d.getMinutes());
        }else {
          newdate = d.getFullYear() + '.'
          + (d.getMonth() > 8 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1)) + '.'
          + (d.getDate() > 9 ? d.getDate() : "0" + (d.getDate()));
        }
        return newdate
      }
    }
    //附件下载
    Vue.prototype.$download = function (param) {
      var method = "fileUpload/getFileInfoList";
      window.open(Util.downloadURL + "?method=" + method + "&param=" + param + "&sign=" + md5('method' + method + "param" + param + "ecbao"));
    }
    //导出
    Vue.prototype.$exportOut = function (method, param) {
      window.open(Util.url + "?method=" + method + "&param=" + param + "&sign=" + md5('method' + method + "param" + param + "ecbao"));
    }
    

    Vue.prototype.$md5 = function (method, param) {
      return md5('method' + method + "param" + param + "ecbao");
    }
    //带url普通请求(登出专用)
    Vue.prototype.$sendHttp=function(url,method,param,succeed) {
      var self = this;
      Axios({
        method: 'post',
        url:url +'?method='+method,
        params: {
            param:param,
            sign:md5('method' + method + "param" + param + "ecbao")
        }
      }).then(function (res) {
        if (res.data.code == 0) {
          succeed(res);
        } else {
          if(res.data.code == 400){
            location.href = "https://hr.ecbao.cn/login/";
          }
          self.$message({
            message: '操作失败，原因：' + res.data.message,
            type: 'warning'
          });
        }
      }).catch(function (err) {
      });
    }
    //上传头像
    Vue.prototype.$imgUpload = function(params,succeed) {
      var self = this;
      Axios.post(Util.imgUploadURL,params).then(function (res) {
        if (res.data.code == 0) {
          succeed(res);
        } else {
          if(res.data.code == 400){
            location.href = "https://hr.ecbao.cn/login/";
          }
          self.$message({
            message: '操作失败，原因：' + res.data.message,
            type: 'warning'
          });
        }
      }).catch(function (err) {
      });
    }
    //时间过滤器,去掉时分秒
    Vue.filter('date-filter', function(value) {
      console.log(typeof value)
      var date = value.slice(0,9)
      return date;
    })
    //头像过滤器
    Vue.filter("portrait",function(value){
      console.log(typeof value);
      var noHeadImage = Util.noHeadImage[value]||"";
      return noHeadImage;
    })
  }
}


