<!--
  * 内容区域
  * @author shiloh
  * @date 2024/7/16 17:19
-->
<template>
  <q-page-container>
    <breadcrumb-view id="breadcrumb-view" />
    <q-page
      class="row"
      :style-fn="(offset) => ({ minHeight: `calc(100vh - ${offset + 50}px)` })"
    >
      <div class="col-12">
        <div class="column full-height">
          <q-scroll-area class="col q-pa-md">
            <router-view />
          </q-scroll-area>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script setup lang="ts">
  import BreadcrumbView from 'layouts/components/BreadcrumbView.vue'

  defineOptions({ name: 'MainContent' })
</script>

<style scoped></style>
