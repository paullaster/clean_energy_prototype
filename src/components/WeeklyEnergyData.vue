<template>
    <div class="card-size" ref="lineChart"></div>
  </template>
  <script>
  import energyData from "../db/monthly_energy_stat.json";
  import * as echarts from "echarts"
  export default {
    name: 'App',
    mounted(){
      this.drawChart()
    },
    methods: {
      drawChart() {
        const chart = echarts.init(this.$refs.lineChart);
        const option = {
          title: {
            text: `Energy monthly energy data in barrels`
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: energyData.production.map(
              (data) => {
                return data.date;
              }
            )
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: energyData.clean_energy_production.map(
                (data) => {
                  return data.production;
                }
              ),
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