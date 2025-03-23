<!--
  * 布局组件 - 标签页
  * @author shiloh
  * @date 2024/7/24 16:17
-->
<template>
  <div class="row justify-between items-center">
    <q-tabs class="bg-primary text-white" no-caps inline-label dense shrink stretch align="left">
      <q-route-tab
        :key="HOME_MENU.path!"
        :label="HOME_MENU.label"
        :icon="HOME_MENU.icon"
        :name="HOME_MENU.label"
        :to="HOME_MENU.path"
        exact
      />
      <q-route-tab
        v-for="tab in tabStore.tabs"
        :key="tab.path!"
        :label="tab.label"
        :icon="tab.icon"
        :name="tab.label"
        :to="tab.path"
        exact
        @mouseover="tab.closable = true"
        @mouseleave="tab.closable = false"
      >
        <template v-if="HOME_MENU.path !== tab.path && tab.closable" #default>
          <q-icon class="q-ml-sm" name="close" @click.prevent="handleCloseTab(tab)" />
        </template>
      </q-route-tab>
    </q-tabs>

    <div>
      <!--      <q-tabs no-caps inline-label dense shrink stretch>-->
      <!--        <q-tab icon="keyboard_arrow_down" />-->
      <!--        <q-tab :icon="isFullscreen ? 'close_fullscreen' : 'fullscreen'" @click="handleFullscreen" />-->
      <!--      </q-tabs>-->
      <q-btn-group unelevated>
        <q-btn-dropdown dropdown-icon="more_vert">
          <q-list>
            <q-item
              :disable="HOME_MENU.path === tabStore.activeTab.path"
              clickable
              v-close-popup
              @click="handleCloseTab(tabStore.activeTab)"
            >
              <q-item-section>
                <q-item-label>
                  <q-icon name="close" />
                  Close
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="handleFullscreen">
              <q-item-section>
                <q-item-label>
                  <q-icon :name="isFullscreen ? 'close_fullscreen' : 'fullscreen'" />
                  {{ isFullscreen ? 'Restore' : 'Maximize' }}
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="router.go(0)">
              <q-item-section>
                <q-item-label>
                  <q-icon name="refresh" />
                  Reload
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="handleOpenInNewWindow">
              <q-item-section>
                <q-item-label>
                  <q-icon name="open_in_new" />
                  Open in New Window
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              :disable="tabStore.closeLeftTabsDisabled"
              clickable
              v-close-popup
              @click="tabStore.removeLeftTabs()"
            >
              <q-item-section>
                <q-item-label>
                  <q-icon name="turn_left" />
                  Close Tabs to the left
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              :disable="tabStore.closeRightTabsDisabled"
              clickable
              v-close-popup
              @click="tabStore.removeRightTabs()"
            >
              <q-item-section>
                <q-item-label>
                  <q-icon name="turn_right" />
                  Close Tabs to the right
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              :disable="tabStore.tabs.length <= 1"
              clickable
              v-close-popup
              @click="tabStore.removeOtherTabs()"
            >
              <q-item-section>
                <q-item-label>
                  <q-icon name="align_horizontal_center" />
                  Close Other Tabs
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              :disable="tabStore.tabs.length === 0"
              clickable
              v-close-popup
              @click="handleRemoveAllTabs"
            >
              <q-item-section>
                <q-item-label>
                  <q-icon name="sync_alt" />
                  Close All Tabs
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn
          :icon="isFullscreen ? 'close_fullscreen' : 'fullscreen'"
          @click.stop="handleFullscreen"
        />
      </q-btn-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Tab, useTabStore } from 'stores/tab'
import { HOME_MENU } from 'src/router/routes/menu.data'

const tabStore = useTabStore()
const router = useRouter()

/**
 * close tab
 * @param tab current tab
 * @author shiloh
 * @date 2024/7/25 16:01
 */
async function handleCloseTab(tab: Tab) {
  tabStore.removeTab(tab)
  const lastTab = tabStore.tabs.at(-1)
  await router.push({ path: lastTab?.path ?? HOME_MENU.path })
  tabStore.setActiveTab(lastTab ?? HOME_MENU)
}

const isFullscreen = ref(false)

/**
 * fullscreen
 * @author shiloh
 * @date 2025/3/22 11:07
 */
async function handleFullscreen() {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen()
    isFullscreen.value = true
    return
  }

  await document.exitFullscreen()
  isFullscreen.value = false
}

/**
 * open current tab in new window
 * @author shiloh
 * @date 2025/3/22 11:46
 */
function handleOpenInNewWindow() {
  window.open(window.location.href, '_blank')
}

/**
 * remove all tabs, then go to home page
 * @author shiloh
 * @date 2025/3/23 11:52
 */
function handleRemoveAllTabs() {
  tabStore.removeAllTabs()
  router.push(HOME_MENU.path)
}

// region watch

const currentRoute = useRoute()

watch(
  () => currentRoute.path,
  (newValue) => {
    tabStore.setActiveTab(tabStore.tabs.find((tab) => tab.path === newValue) ?? HOME_MENU)
  },
)

// endregion
</script>

<style scoped lang="scss">
.q-icon:hover {
  background-color: $grey-5;
}
</style>
