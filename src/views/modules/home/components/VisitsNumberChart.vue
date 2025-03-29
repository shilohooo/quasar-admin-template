<!--
  *
  * @author shiloh
  * @date 2025/3/27 22:33
-->
<template>
  <my-chart :option="option" />
</template>

<script setup lang="ts">
import MyChart, { type EChartsOption } from 'components/echarts/MyChart.vue'

const option: EChartsOption = {
  title: {
    text: 'Visits Count',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
    },
  ],
}
</script>

<style scoped></style>
