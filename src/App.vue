<template>
  <div ref="lineChart">
    chart to appear here
  </div>
</template>
<script>
import enargyData from "./db/daily_energy_stat.json"
import * as echarts from "echarts"
export default {
  name: 'App', 
  methods: {
    drawCahrt() {
      echarts.init(this.$refs.lineChart)
    }
  }
}
</script>