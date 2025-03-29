<!--
  * Visits Card
  * @author shiloh
  * @date 2025/3/28 14:56
-->
<template>
  <div class="row justify-between">
    <user-number-card class="col-3" />
    <usage-times-card class="col-3" />
    <download-times-card class="col-3" />
  </div>
</template>

<script setup lang="ts">
import UserNumberCard from 'src/views/modules/home/components/visits-card/components/UserNumberCard.vue'
import UsageTimesCard from 'src/views/modules/home/components/visits-card/components/UsageTimesCard.vue'
import DownloadTimesCard from 'src/views/modules/home/components/visits-card/components/DownloadTimesCard.vue'

defineOptions({ name: 'VisitsCard' })
</script>

<style scoped></style>
