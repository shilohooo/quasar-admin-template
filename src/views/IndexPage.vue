<template>
  <div>
    <h1>Welcome:)</h1>
    <p>Current time is: {{ new Date() }}</p>
    <search-box />
  </div>
</template>

<script setup lang="ts">
import SearchBox from 'components/SearchBox.vue'

defineOptions({
  name: 'IndexPage',
})
</script>
