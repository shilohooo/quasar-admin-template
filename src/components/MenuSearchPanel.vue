<!--
  * menu search panel for quick navigation
  * @author shiloh
  * @date 2025/1/27 11:21
-->
<template>
  <q-dialog ref="dialogRef">
    <q-card :style="{ width: '700px', maxWidth: '80vw' } as CSSProperties">
      <div class="q-mt-sm q-ml-sm q-mr-sm">
        <q-input
          v-model="searchVal"
          placeholder="Search here for quick navigation..."
          type="search"
          dense
          borderless
          clearable
          autofocus
          @keydown="handleKeydown"
        >
          <template #prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>

      <q-separator />

      <q-card-section>
        <div
          v-if="!filteredMenus.length"
          class="row items-center justify-center"
          :style="{ height: '100px' } as CSSProperties"
        >
          <div class="text-grey text-center text-h6">Nothing here...</div>
        </div>

        <q-list
          v-else
          class="scroll q-pa-sm"
          :style="{ height: '300px', maxHeight: '50vh' } as CSSProperties"
        >
          <q-item
            v-for="(menu, index) in filteredMenus"
            :key="menu.path!"
            clickable
            :active="activeIdx === index"
            :id="`menu-search-result-${index}`"
            class="q-mb-sm rounded-borders"
            active-class="bg-blue-1"
            @click="handleJumpTo(menu)"
          >
            <q-item-section avatar>
              <q-icon :name="menu.icon" />
            </q-item-section>
            <q-item-section>{{ menu.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-separator />

      <q-card-actions class="row items-center justify-center">
        <div class="col-6 row items-center">
          <span>Navigate</span>
          <kbd>
            <q-icon name="mdi-arrow-up-bold" />
          </kbd>
          <kbd>
            <q-icon name="mdi-arrow-down-bold" />
          </kbd>

          <q-separator vertical class="q-mx-sm" />

          <span>Select</span>
          <kbd>
            <q-icon name="mdi-keyboard-return" />
          </kbd>

          <q-separator vertical class="q-mx-sm" />

          <span>Exit</span>
          <kbd> Esc </kbd>
        </div>
        <div class="col-6 text-right">
          <q-btn color="primary" label="Close" no-caps @click="onDialogOK" />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import type { CSSProperties } from 'vue'
import type { Menu } from 'src/router/routes/menu.data'
import { MenuType } from 'src/router/routes/menu.data'
import { getFlatMenus, menuList } from 'src/router/routes/menu.data'

defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogOK } = useDialogPluginComponent()

// region search

const searchVal = ref('')
const menus = getFlatMenus(menuList, [])
const filteredMenus = computed(() => {
  if (!searchVal.value) {
    return []
  }

  return menus.filter((menu) => menu.label.toLowerCase().includes(searchVal.value.toLowerCase()))
})

// endregion

// region jump

const activeIdx = ref(0)
const router = useRouter()

/**
 * shortcut handle
 * @param e keyboard event
 * @author shiloh
 * @date 2025/1/27 15:36
 */
function handleKeydown(e: KeyboardEvent) {
  switch (e.code) {
    case 'ArrowUp':
      e.preventDefault()
      if (activeIdx.value === 0) {
        activeIdx.value = filteredMenus.value.length - 1
      } else {
        activeIdx.value--
      }
      scrollIntoView()
      break
    case 'ArrowDown':
      e.preventDefault()
      if (activeIdx.value === filteredMenus.value.length - 1) {
        activeIdx.value = 0
      } else {
        activeIdx.value++
      }
      scrollIntoView()
      break
    case 'Enter': {
      e.preventDefault()
      handleJumpTo(filteredMenus.value[activeIdx.value]!)
      break
    }
    default:
      break
  }
}

/**
 * scroll into view
 * @author shiloh
 * @date 2025/1/27 15:53
 */
function scrollIntoView() {
  const el = document.getElementById(`menu-search-result-${activeIdx.value}`)
  if (!el) {
    return
  }

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  })
}

/**
 * jump to selected page
 * @param menu selected menu
 * @author shiloh
 * @date 2025/1/27 16:26
 */
function handleJumpTo(menu: Menu) {
  if (MenuType.PAGE === menu.type) {
    router.push(menu.path!)
    onDialogOK()
    return
  }

  if (MenuType.LINK === menu.type) {
    window.open(menu.path!, '_blank')
    onDialogOK()
    return
  }

  if (!menu.children?.length) {
    return
  }

  for (const subMenu of menu.children) {
    if (MenuType.PAGE === subMenu.type) {
      console.log('subMenu', subMenu)
      router.push(subMenu.path!)
      onDialogOK()
      break
    }
    if (MenuType.LINK === subMenu.type) {
      window.open(subMenu.path!, '_blank')
      onDialogOK()
      break
    }

    handleJumpTo(subMenu)
  }
}

// endregion
</script>

<style scoped lang="scss">
@import 'src/css/quasar.variables';

.menu {
  background-color: $dark;
  color: white;
}

.menu:hover {
  cursor: pointer;
  background-color: $primary;
}

kbd {
  border: 1px solid $dark;
  border-radius: 6px;
  box-shadow: -2px 2px 2px $dark;
  text-align: center;
  background-color: white;
  padding: 4px 8px;
  margin: 0 4px 0 8px;
}
</style>
