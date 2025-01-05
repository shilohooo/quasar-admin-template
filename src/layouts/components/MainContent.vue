<!--
  * 内容区域
  * @author shiloh
  * @date 2024/7/16 17:19
-->
<template>
  <q-page-container class="bg-grey-2">
    <tab-view />
    <q-page
      class="row"
      :style-fn="(offset) => ({ minHeight: `calc(100vh - ${offset + 40}px)` })"
    >
      <div class="col-12">
        <div class="column full-height">
          <q-scroll-area class="col bg-white q-ma-md shadow-2 rounded-borders q-pa-md">
            <router-view>
              <template #default="{ Component }">
                <transition
                  mode="in-out"
                  :name="transitionName"
                >
                  <component :is="Component" />
                </transition>
              </template>
            </router-view>
          </q-scroll-area>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useTabStore } from 'stores/tab'
  import { useRoute } from 'vue-router'
  import { MenuType } from 'src/router/routes/menu.data'
  import TabView from 'layouts/components/TabView.vue'

  defineOptions({ name: 'MainContent' })
  const transitionName = ref('scale')
  const tabStore = useTabStore()
  const route = useRoute()

  onMounted(() => {
    tabStore.addTab({
      path: route.path,
      label: route.name as string,
      icon: route.meta.icon as string,
      type: MenuType.PAGE
    })
  })
</script>

<style scoped>
  /*.fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.75s ease-out;
  }

  .slide-enter-to {
    position: absolute;
    right: 0;
  }

  .slide-enter-from {
    position: absolute;
    right: -100%;
  }

  .slide-leave-to {
    position: absolute;
    left: -100%;
  }

  .slide-leave-from {
    position: absolute;
    left: 0;
  }*/

  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.5s ease;
  }

  .scale-enter-from,
  .scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }

  /*.scale-slide-enter-active,
  .scale-slide-leave-active {
    position: absolute;
    transition: all 0.85s ease;
  }

  .scale-slide-enter-from {
    left: -100%;
  }

  .scale-slide-enter-to {
    left: 0;
  }

  .scale-slide-leave-from {
    transform: scale(1);
  }

  .scale-slide-leave-to {
    transform: scale(0.8);
  }*/
</style>
