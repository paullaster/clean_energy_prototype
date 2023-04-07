<template>
  <div class="card-size" ref="lineChart"></div>
</template>
<script>
import enargyData from "./db/daily_energy_stat.json"
import * as echarts from "echarts"
export default {
  name: 'App',
  methods: {
    drawChart() {
      const chart = echarts.init(this.$refs.lineChart);
      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      };
      chart.setOption(option);
    },
  }
}
</script>
<style>
.card-size {
  width: 70vw;
  max-width: 80vw;
  height: 80vh;
}
</style>