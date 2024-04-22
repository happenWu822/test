
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{str}}</p>
    <p @click="btn('aaa')">{{str}}</p>
    <p>{{num}}</p>
    <p @click="mutationAdd">添加</p> -->
    <div ref="test" style="width:100px;height:100px"></div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import * as echarts from 'echarts';



export default {
  name: "Home",
  computed: {
    ...mapState(["str", "num"])
  },
  beforeCreate() {
    console.log(0,this)
  },
  created() {
    
    // function foo() {
    //   // a=2;
    //   this.bar();
    // }
    // function bar() {
    //   var a = 3;
    //   console.log(this.a);
    // }
    // foo();
    // class fun {
    //   constructor() {
    //     console.log(22,this);
    //     this.a = '1'
    //   }
    // }
    // var fn = new fun({c:1});
    // console.log(111,fn);
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.test);
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  },
  methods: {
    ...mapMutations(["btn", "add"]),
    ...mapActions(["mutationAdd"])
  }
};
</script>
