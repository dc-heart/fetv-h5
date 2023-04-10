import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
//设置全局请求根路径
Vue.prototype.baseUrl="http://192.168.1.10:8080"
uni.addInterceptor('request', {
  success(args) {
     let list = args.data
     function removeString(obj) {
       //判断参数是否是数组或对象，如果不是，直接返回原值
       if (!obj || typeof obj !== "object") {
         return obj;
       }
       //遍历对象的属性或元素
       for (let key in obj) {
         //判断属性或元素是否属于对象自身
         // if (obj.hasOwnProperty.call(key)) {
         //判断属性或元素是否是字符串类型
         if (typeof obj[key] === "string") {
           //使用正则表达式匹配目标字符串，并赋值给原属性或元素
           // http://192.168.1.13:8080
           //192.168.1.54:8080
           obj[key] = obj[key].replace(/http:\/\/192\.168\.1\.13:8080/g, "");
           obj[key] = obj[key].replace(/http:\/\/192\.168\.110\.143:8080/g, "");
           obj[key] = obj[key].replace(/http:\/\/192\.168\.1\.18:8080/g, "");
           obj[key] = obj[key].replace(/http:\/\/192\.168\.1\.40:8080/g, "");
           obj[key] = obj[key].replace(/http:\/\/192\.168\.1\.1:8080/g, "");
           obj[key] = obj[key].replace(/http:\/\/192\.168\.1\.10:8080/g, "");
         } else if (typeof obj[key] === "object") {
           //如果属性或元素是数组或对象类型，就递归调用函数
           removeString(obj[key]);
         }
         // }
       }
       //返回处理后的对象
   
       return obj;
     }
     // 如果某个属性的值是字符串且包含"/profile"，就在"/profile"前面添加ip地址
     function addPrefix(obj) {
       for (let key in obj) {
         if (typeof obj[key] === 'string' && obj[key].includes('/profile')) {
           obj[key] = obj[key].replace(/\/profile/g, 'http://192.168.1.10:8080/profile');
           // obj[key] = obj[key].replace(/\/profile/g, 'http://43.139.172.18:8088/profile');
         } else if (typeof obj[key] === 'object') {
           addPrefix(obj[key]);
         }
       }
       return obj;
     }
   
     removeString(list)
     // console.log(list, '12312312312312')
     addPrefix(list)
     return list;
  }, 

})

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif