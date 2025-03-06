<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const router = useRouter()
onMounted(() => {
  console.log(router.getRoutes())
})
</script>
