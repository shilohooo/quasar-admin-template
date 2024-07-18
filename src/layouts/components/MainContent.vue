<!--
  * 内容区域
  * @author shiloh
  * @date 2024/7/16 17:19
-->
<template>
  <q-page-container>
    <q-toolbar>
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
    <q-page padding>
      <router-view />
    </q-page>
  </q-page-container>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'

  defineOptions({ name: 'MainContent' })

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
