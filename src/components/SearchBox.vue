<!--
  * doc search
  * @author shiloh
  * @date 2025/1/24 15:02
-->
<template>
  <div>
    <ais-instant-search :search-client="searchClient" index-name="shiloh595" :insights="true">
      <ais-configure :hits-per-page.camel="8" />
      <!--      搜索框-->
      <ais-search-box />
      <!--      搜索结果列表-->
      <ais-hits>
        <template #item="{ item }">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
        </template>
      </ais-hits>

      <!--      分页-->
      <ais-pagination />
    </ais-instant-search>
  </div>
</template>

<script setup lang="ts">
import {
  AisInstantSearch,
  AisSearchBox,
  AisHits,
  AisConfigure,
  AisPagination,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
} from 'vue-instantsearch/vue3/es'
import { liteClient as algoliasearch } from 'algoliasearch/lite'
import 'instantsearch.css/themes/algolia-min.css'

const searchClient = algoliasearch('', '')
</script>

<style scoped></style>
