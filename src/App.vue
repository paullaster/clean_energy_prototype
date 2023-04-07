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
      const uniqueDates = [...new Set(this.data.map((stat) => stat.date))];
      const groupedData = uniqueDates.map((date) => {
        return this.data.filter((stat) => {
          return stat.date === date;
        });
      });
      const seriesData = groupedData.map(function (innerData) {
        const date = innerData[0].date;
        const seriesItem = {
          name: date,
          type: "line",
          data: innerData.map(function (item) {
            return {
              name: item.user_id,
              value: ((item.user_total_activities_per_day / item.total_activities_per_day) * 100).toFixed(
                2
              ),
            };
          }),
        };
        return seriesItem;
      });
      const option = {
        title: {
          text: "",
        },
        tooltip: {},
        // legend: {
        // //     top: '',
        // //   data: uniqueDates,
        // },
        xAxis: {
          type: "category",
          data: uniqueDates,
        },
        yAxis: {
          type: "value",
        },
        series: seriesData,
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