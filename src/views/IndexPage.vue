<template>
  <q-list>
    <q-item>Quasar Version: {{ $q.version }}</q-item>
    <q-item>Platform: {{ $q.platform }}</q-item>
    <q-item>Screen: {{ $q.screen }}</q-item>
    <q-item>Language: {{ $q.lang }}</q-item>
    <q-item> IconSet: {{ $q.iconSet }}</q-item>
  </q-list>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'IndexPage'
  })
</script>
