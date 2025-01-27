<!--
  *
  * @author shiloh
  * @date 2025/1/26 16:10
-->
<template>
  <div
    class="search-box row items-center justify-between q-pa-sm"
    @click="handleOpenMenuSearchPanel"
  >
    <q-icon name="search" size="sm" />
    <span class="q-ml-sm">Search</span>
    <div class="shortcut">{{ shortcutLabel }}</div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import MenuSearchPanel from 'components/MenuSearchPanel.vue'
import { onUnmounted } from 'vue'

const $q = useQuasar()
const shortcutLabel = computed(() =>
  $q.platform.is.desktop ? ($q.platform.is.mac ? '⌘K' : 'Ctrl+K') : null,
)

/**
 * open menu search panel
 * @author shiloh
 * @date 2025/1/27 11:29
 */
function handleOpenMenuSearchPanel() {
  $q.dialog({
    component: MenuSearchPanel,
  }).onOk(() => {
    console.log('ok')
  })
}

/**
 * open search panel via keyboard shortcut
 * @param e event
 * @author shiloh
 * @date 2025/1/27 17:03
 */
function handleKeydown(e: KeyboardEvent) {
  if ((e.ctrlKey || e.metaKey) && e.code === 'KeyK') {
    e.preventDefault()
    handleOpenMenuSearchPanel()
  }
}

// region mounted

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

// endregion

// region unmounted

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

// endregion
</script>

<style scoped lang="scss">
@import 'src/css/quasar.variables';

.search-box {
  background-color: #e0e0e0;
  color: #212121;
  border-radius: 20px;
}

.search-box:hover {
  cursor: pointer;

  .q-icon,
  span {
    color: $primary;
  }
}

.shortcut {
  margin: 0 0 0 12px;
  background-color: #bdbdbd;
  padding: 0 4px;
  border-radius: 0 10px 10px 0;
}
</style>
