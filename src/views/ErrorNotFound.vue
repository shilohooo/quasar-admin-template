<template>
  <div class="fullscreen text-primary text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">404</div>

      <div
        class="text-h2"
        style="opacity: 0.4"
      >
        Oops. Nothing here:(
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        label="TAKE ME BACK:)"
        no-caps
        @click="router.go(-1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'

  defineOptions({
    name: 'ErrorNotFound'
  })

  const router = useRouter()
</script>
