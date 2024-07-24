<template>
  <q-card>
    <q-tabs
      v-model="activeTabName"
      inline-label
      active-class="text-primary"
      dense
      align="justify"
      narrow-indicator
    >
      <q-tab
        v-for="tab in tabs"
        :name="tab.name"
        :key="tab.name"
        :icon="tab.icon"
        :label="tab.label"
        no-caps
      />
    </q-tabs>

    <q-separator />

    <q-tab-panels
      v-model="activeTabName"
      animated
      transition-next="jump-up"
      transition-prev="jump-up"
      swipeable
    >
      <q-tab-panel
        v-for="tab in tabs"
        :key="tab.name"
        :name="tab.name"
      >
        <vue-json-pretty
          :data="tab.content as unknown as JSONDataType"
          :deep="1"
        />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script setup lang="ts">
  import VueJsonPretty from 'vue-json-pretty'
  import 'vue-json-pretty/lib/styles.css'
  import { ref } from 'vue'
  import { QVueGlobals, useQuasar } from 'quasar'
  import type { JSONDataType } from 'vue-json-pretty/types/utils'

  defineOptions({
    name: 'IndexPage'
  })

  const activeTabName = ref('version')

  export interface QuasarInfoTab {
    name: string
    label: string
    icon: string
    content: QVueGlobals[keyof QVueGlobals]
  }

  const $q = useQuasar()
  const tabs: QuasarInfoTab[] = [
    {
      name: 'version',
      label: 'Version',
      icon: 'info',
      content: $q.version
    },
    {
      name: 'dark',
      label: 'Dark',
      icon: 'dark_mode',
      content: $q.dark
    },
    {
      name: 'platform',
      label: 'Platform',
      icon: 'computer',
      content: $q.platform
    },
    {
      name: 'screen',
      label: 'Screen',
      icon: 'monitor',
      content: $q.screen
    },
    {
      name: 'lang',
      label: 'Language',
      icon: 'language',
      content: $q.lang
    },
    {
      name: 'iconSet',
      label: 'IconSet',
      icon: 'add_reaction',
      content: $q.iconSet
    }
  ]
</script>
