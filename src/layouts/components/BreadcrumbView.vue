<!--
  *
  * @author shiloh
  * @date 2024/7/19 16:24
-->
<template>
  <q-breadcrumbs active-color="text-white">
    <q-breadcrumbs-el
      :label="HOME_MENU.label"
      :icon="HOME_MENU.icon"
      :to="HOME_MENU.path"
    />
    <q-breadcrumbs-el
      v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb.label"
      :label="breadcrumb.label"
      :icon="breadcrumb.icon"
    />
  </q-breadcrumbs>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import { HOME_MENU } from 'src/router/routes/menu.data'

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
    console.log('current route', currentRoute.value)
    console.log('current route path', currentRoute.value.path)
    breadcrumbs.value =
      HOME_MENU.path === currentRoute.value.path
        ? []
        : [
            {
              label: currentRoute.value.name as string,
              to: currentRoute.value.path,
              icon: currentRoute.value.meta.icon as string
            }
          ]
    console.log('breadcrumbs', breadcrumbs.value)
  }
</script>

<style scoped></style>
