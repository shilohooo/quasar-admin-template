<!--
  * doc search
  * @author shiloh
  * @date 2025/1/24 15:02
-->
<template>
  <ais-instant-search :search-client="searchClient" :index-name="indexName" :insights="true">
    <ais-configure :hits-per-page.camel="8" />
    <!--      搜索框-->
    <ais-search-box class="q-mb-md">
      <template #default="{ currentRefinement, isSearchStalled, refine }">
        <q-input
          autofocus
          dense
          outlined
          placeholder="Filter search results..."
          type="search"
          :model-value="currentRefinement"
          @update:model-value="(value) => refine(value)"
        />
        <span v-if="isSearchStalled">Loading...</span>
      </template>
    </ais-search-box>
    <!--      搜索结果列表-->
    <ais-hits>
      <template #item="{ item }">
        <!--          <vue-json-pretty :data="item as unknown as JSONDataType" :deep="1" />-->
        <div>type: {{ item.type }}</div>
        <div>url: {{ item.url }}</div>
        <div style="word-break: break-word">content: {{ item.content }}</div>
      </template>
    </ais-hits>
    <!--      分页-->
    <ais-pagination />
  </ais-instant-search>
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
// import VueJsonPretty from 'vue-json-pretty'
// import 'vue-json-pretty/lib/styles.css'
// import type { JSONDataType } from 'vue-json-pretty/types/utils'

// const indexName = ref('instant_search')
// const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76')
const indexName = ref('shiloh595')
const searchClient = algoliasearch('AO6K7ID089', '123c52df025a4e680106fe8618465125')
</script>

<style scoped></style>
