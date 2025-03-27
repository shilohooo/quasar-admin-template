<!--
  *
  * @author shiloh
  * @date 2025/3/27 22:33
-->
<template>
  <div ref="chartDom" style="height: 300px"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

type EChartsOption = echarts.EChartsOption

const chartDom = ref<HTMLDivElement | null>(null)

const option: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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

onMounted(() => {
  const myChart = echarts.init(chartDom.value)
  myChart.setOption(option)
})
</script>

<style scoped></style>
