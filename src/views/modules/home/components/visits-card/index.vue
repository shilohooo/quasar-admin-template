<!--
  * Visits Card
  * @author shiloh
  * @date 2025/3/28 14:56
-->
<template>
  <div class="row">
    <user-number-card class="col" />
    <usage-times-card class="col" />
    <download-times-card class="col" />
  </div>
</template>

<script setup lang="ts">
import UserNumberCard from 'src/views/modules/home/components/visits-card/components/UserNumberCard.vue'
import UsageTimesCard from 'src/views/modules/home/components/visits-card/components/UsageTimesCard.vue'
import DownloadTimesCard from 'src/views/modules/home/components/visits-card/components/DownloadTimesCard.vue'

defineOptions({ name: 'VisitsCard' })
</script>

<style scoped></style>
