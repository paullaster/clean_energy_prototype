<template>
  <div class="grid">
    <sidebar>
      <router-link to="/hourlyData">Go to </router-link>
    </sidebar>
    <main>
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
<style></style>