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
            data: ['week1', 'week2', 'week3', 'week4']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'solar',
              type: 'line',
              smooth: true,
              data: [
                energyData.production[0].solar,
                energyData.production[1].solar,
                energyData.production[2].solar,
                energyData.production[3].solar
              ]
            },
            {
              name: 'wind',
              type: 'line',
              smooth: true,
              data: [
                energyData.production[0].wind,
                energyData.production[1].wind,
                energyData.production[2].wind,
                energyData.production[3].wind
              ]
            },
            {
              name: 'hydro',
              type: 'line',
              smooth: true,
              data: [
                energyData.production[0].hydro,
                energyData.production[1].hydro,
                energyData.production[2].hydro,
                energyData.production[3].hydro
              ]
            },
            {
              name: 'total',
              type: 'line',
              smooth: true,
              data: [
                energyData.production[0].total,
                energyData.production[1].total,
                energyData.production[2].total,
                energyData.production[3].total
              ]
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
  