<!--
 * @Author: your name
 * @Date: 2020-12-09 11:43:43
 * @LastEditTime: 2020-12-09 11:50:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \zdxme:\fileAll\vueCom\self\mynumbercom\src\App.vue
-->
<template>
  <div id="app">
    <h2>calculate</h2>
    <mynumbercom :num1="num1" :num2="num2" v-on:getSumFromChild="receiveChildSum"></mynumbercom>
    
    <p>从子组件获取到的值：{{sumFromChild}}</p>
  </div>
</template>

<script>
import mynumbercom from './myPlugin/mynumbercom/mynumbercom'; // 引入
export default {
  name: 'app',
  data () {
    return {
      num1: 4,
      num2: 5,
      sumFromChild:0,
    }
  },
  components:{ //注册插件
    mynumbercom
  },
  methods:{
    receiveChildSum(sum){ //自定义事件，接收子组件的和
      this.sumFromChild = sum;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>