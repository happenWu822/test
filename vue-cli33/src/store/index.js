import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // 存放数据的
    str: "你好",
    arr: ["a", "b", "c"],
    num: 1
  },
  getters: {
    changeArr(state) {
      console.log(1);
      return state.arr.join("=");
    }
  }, // 缓存的computed，只执行一次，改变变量之后会重新获取吗？？？
  mutations: { // 放在methods中，都是同步代码
    btn(state, arg) {
      console.log(state.str + arg);
    },
    add(state) {
      console.log(this);
      state.num++;
      // setTimeout(() => { // 这里虽然能在页面中显示出来具体数值，但是state.num实际上是没有增加那么多
      //   state.num++;
      // },0)
    },
    changeStr(state, arg) {
      state.str = arg;
    }
  },
  actions: { // 和mutation一样可以存放方法，但是这里可以是异步的
    btnS({commit, state}, arg2) {
      console.log(commit, state.str + arg2);
    },
    mutationAdd({commit}) {
      setTimeout(() => {
        commit("add")
      })
    }
  },
  modules: {}
});
