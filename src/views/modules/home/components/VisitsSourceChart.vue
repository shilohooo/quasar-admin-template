<!--
  * visits source chart
  * @author shiloh
  * @date 2025/3/27 22:28
-->
<template>
  <my-chart :option="option" />
</template>

<script setup lang="ts">
import MyChart, { type EChartsOption } from 'components/echarts/MyChart.vue'

const option: EChartsOption = {
  title: {
    text: 'Visits Source',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    bottom: 0,
    left: 'center',
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  series: [
    {
      name: 'Visits Source',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
}
</script>

<style scoped></style>
