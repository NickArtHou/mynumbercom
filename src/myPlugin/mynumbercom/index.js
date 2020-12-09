/*
 * @Author: your name
 * @Date: 2020-12-09 11:47:25
 * @LastEditTime: 2020-12-09 11:58:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zdxme:\fileAll\vueCom\self\mynumbercom\src\myPlugin\mynumbercom\index.js
 */
import mynumbercom from './mynumbercom.vue';

mynumbercom.install = Vue => Vue.component(mynumbercom.name, mynumbercom);//注册组件

export default mynumbercom;
