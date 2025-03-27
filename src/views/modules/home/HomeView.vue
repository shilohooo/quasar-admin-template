<template>
  <div class="row">
    <traffic-trend-chart class="col-12" />
    <visits-source-chart class="col-6" />
    <visits-number-chart class="col-6" />
  </div>
</template>

<script setup lang="ts">
import TrafficTrendChart from 'src/views/modules/home/components/TrafficTrendChart.vue'
import VisitsSourceChart from 'src/views/modules/home/components/VisitsSourceChart.vue'
import VisitsNumberChart from 'src/views/modules/home/components/VisitsNumberChart.vue'
</script>

<style scoped lang="scss"></style>
