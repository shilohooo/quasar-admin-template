<template>
  <div class="row q-gutter-y-md">
    <visits-card class="col-12" />
    <traffic-trend-chart class="col-12" />
    <div class="row col-12 justify-between">
      <visits-source-chart class="col-5" />
      <visits-number-chart class="col-5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TrafficTrendChart from 'src/views/modules/home/components/TrafficTrendChart.vue'
import VisitsSourceChart from 'src/views/modules/home/components/VisitsSourceChart.vue'
import VisitsNumberChart from 'src/views/modules/home/components/VisitsNumberChart.vue'
import VisitsCard from 'src/views/modules/home/components/visits-card/index.vue'
</script>

<style scoped lang="scss"></style>
