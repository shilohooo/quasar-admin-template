<!--
  * 代码块示例
  * @author shiloh
  * @date 2025/1/11 10:33
-->
<template>
  <div>
    <div class="row items-center q-gutter-x-lg">
      <div class="col">
        <q-select v-model="themeName" :options="HIGHLIGHT_JS_THEMES" filled label="Theme" />
      </div>
      <div class="col">
        <q-toggle v-model="browserWindow" label="Browser window" left-label />
      </div>
      <div class="col">
        <q-toggle v-model="alwaysShowCopyButton" label="Always Show Copy Button" left-label />
      </div>
    </div>

    <q-list>
      <q-item v-for="(code, index) in CODES" :key="index">
        <v-code-block
          style="width: 100%"
          :code="code.code"
          highlightjs
          :lang="code.lang"
          :browser-window="browserWindow"
          :persistent-copy-button="alwaysShowCopyButton"
          :theme="themeName"
          :label="code.lang"
          @update:copy-status="handleCopyStatusChange"
        />
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { CODES } from './codes.data'
import { useQuasar } from 'quasar'
import {
  type HighlightJSThemeType,
  HIGHLIGHT_JS_THEMES,
} from 'src/constant/highlightjs/themes.data'

const themeName = ref<HighlightJSThemeType>('stackoverflow-light')
const browserWindow = ref(true)
const alwaysShowCopyButton = ref(false)

const $q = useQuasar()

/**
 * copy status change callback: show a notification
 * @author shiloh
 * @date 2025/1/11 11:17
 */
const handleCopyStatusChange = (status: string) => {
  if ('success' === status) {
    $q.notify({
      color: 'positive',
      message: 'Copied!',
      icon: 'check',
      timeout: 1000,
      position: 'top',
    })
  }
}
</script>

<style scoped></style>
