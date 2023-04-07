<template>
  <div class="grid">
    <sidebar class="sidebar">
      <h1>Dashboard</h1>
      <div class="nav">
        <div class="item">
          <router-link to="/">Hourly Data Graph</router-link>
        </div>
        <div class="item">
          <router-link to="/daily_data">Daily Data Graph</router-link>
        </div>
      </div>
    </sidebar>
    <main class="main">
      <router-view></router-view>
      <router-view name="hourlyGraph"></router-view>
    </main>
  </div>
</template>
<script>
// import {HourlyEnergyData} from './views'
export default {
  name: 'App',
  components: {
    // HourlyEnergyData,
  }
}
</script>
<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.grid {
  display: grid;
  grid-template-columns: 2fr 10fr;
}

.sidebar {
  background-color: #1c2e4a !important;
  padding: 4% !important;
  color: #fff;
}
.nav{
  margin-top: 4%;
}
.item {
  margin-top: 4% !important;
}
a {
  text-decoration: none;
  color: #fff;
}

.main {
  padding-top: 4% !important;
  padding-left: 4%;
  color: #fff;
  background-color: #151922;
}
</style>