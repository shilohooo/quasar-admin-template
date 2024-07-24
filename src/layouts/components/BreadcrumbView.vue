<!--
  *
  * @author shiloh
  * @date 2024/7/19 16:24
-->
<template>
  <q-toolbar class="bg-white">
    <q-breadcrumbs>
      <q-breadcrumbs-el
        label="Home"
        icon="home"
        to="/"
      />
      <q-breadcrumbs-el
        v-for="breadcrumb in breadcrumbs"
        :key="breadcrumb.label"
        :label="breadcrumb.label"
        :icon="breadcrumb.icon"
      />
    </q-breadcrumbs>
  </q-toolbar>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'

  defineOptions({ name: 'BreadcrumbView' })

  export interface Breadcrumb {
    icon?: string
    label: string
    to: string
  }

  const breadcrumbs = ref<Breadcrumb[]>([])

  const router = useRouter()
  const { currentRoute } = router
  onMounted(() => {
    createBreadcrumbs()
  })

  watch(
    () => currentRoute.value,
    () => {
      createBreadcrumbs()
    }
  )

  function createBreadcrumbs() {
    breadcrumbs.value =
      '/' === currentRoute.value.path
        ? []
        : [
            {
              label: currentRoute.value.name as string,
              to: currentRoute.value.path,
              icon: currentRoute.value.meta.icon as string
            }
          ]
  }
</script>

<style scoped></style>
