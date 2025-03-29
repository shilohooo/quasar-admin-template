<!--
  * visits source chart
  * @author shiloh
  * @date 2025/3/27 22:28
-->
<template>
  <q-card>
    <q-card-section>
      <div ref="chartDom" style="height: 300px"></div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

type EChartsOption = echarts.EChartsOption

const chartDom = ref<HTMLDivElement | null>(null)

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

onMounted(() => {
  const myChart = echarts.init(chartDom.value)
  myChart.setOption(option)
})
</script>

<style scoped></style>
