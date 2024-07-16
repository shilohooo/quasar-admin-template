<!--
  * 内容区域
  * @author shiloh
  * @date 2024/7/16 17:19
-->
<template>
  <q-page-container>
    <q-page padding>
      <router-view />
    </q-page>
  </q-page-container>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MainContent' })
</script>

<style scoped></style>
