<!--
  * chart component
  * @author shiloh
  * @date 2025/3/29 10:56
-->
<template>
  <q-card>
    <q-card-section>
      <v-chart class="my-chart" :option="option" autoresize />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import type {
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
} from 'echarts/components'
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components'
import type { BarSeriesOption, LineSeriesOption, PieSeriesOption } from 'echarts/charts'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'
import type { ComposeOption } from 'echarts'

use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  BarChart,
  PieChart,
  LabelLayout,
  CanvasRenderer,
  UniversalTransition,
])

export type EChartsOption = ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
  | BarSeriesOption
  | PieSeriesOption
>

const props = withDefaults(defineProps<{ option: EChartsOption; height?: number | string }>(), {
  height: '300px',
})

const chartHeight = computed(() => {
  return typeof props.height === 'number' ? `${props.height}px` : props.height
})
</script>

<style scoped>
.my-chart {
  height: v-bind(chartHeight);
}
</style>
