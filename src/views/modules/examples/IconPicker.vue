<!--
  * 图标选择器
  * @author shiloh
  * @date 2025/1/11 21:27
-->
<template>
  <div>
    <!-- region search form -->

    <q-form>
      <q-select
        v-model="formData.type"
        :options="ICON_SET"
        label="Icon Set"
        hint="Select the icon set..."
        @update:model-value="handleSearch"
      />
      <q-input
        v-model="formData.name"
        label="Icon Name"
        clearable
        hint="Input the icon name from filter..."
      />
    </q-form>

    <!-- endregion -->

    <!-- region icons -->

    <div class="q-mt-sm rounded-borders q-card--bordered q-pa-lg shadow-1">
      <div class="row">
        <div class="col">
          <q-btn
            v-for="iconName in displayIcons"
            :key="iconName"
            :icon="iconName"
            flat
            @click="selectedIconName = iconName"
          />
        </div>
      </div>
      <div class="flex justify-center">
        <q-pagination
          v-model="formData.pageNo"
          :max="totalPages"
          input
          @update:model-value="handleCurrentPageChange"
        />
      </div>
    </div>

    <!-- endregion -->

    <!-- region selected -->

    <div v-if="selectedIconName" class="q-mt-lg">
      <q-icon :name="selectedIconName" size="2rem" />
      <p>{{ selectedIconName }}</p>
    </div>

    <!-- endregion -->
  </div>
</template>

<script setup lang="ts">
import type { QuasarIconSets } from 'quasar'
import { ICON_SET } from 'src/constant/extra'
import { ICON_MAP } from 'src/constant/icon-set'

// region search

interface IconSetSearchModel {
  pageNo: number
  pageSize: number
  type: QuasarIconSets
  name?: string
}

const formData = ref<IconSetSearchModel>({
  pageNo: 1,
  pageSize: 100,
  type: 'material-icons',
})

const selectedIconName = ref<string | undefined>(undefined)

const icons = ref<string[]>([])
const totalPages = computed(() => Math.ceil(icons.value.length / formData.value.pageSize))
const displayIcons = computed(() =>
  icons.value.slice(
    (formData.value.pageNo - 1) * formData.value.pageSize,
    formData.value.pageNo * formData.value.pageSize,
  ),
)

/**
 * Get icons
 * @author shiloh
 * @date 2025/1/11 23:20
 */
function getIcons() {
  const iconData = ICON_MAP[formData.value.type]
  if (!iconData || !iconData.icons.length) {
    icons.value = []
    return
  }

  icons.value = iconData.icons.filter((icon) => {
    if (!formData.value.name) {
      return true
    }
    return icon.indexOf(formData.value.name) > -1
  })
}

/**
 * search
 * @author shiloh
 * @date 2025/1/11 23:54
 */
function handleSearch() {
  formData.value.pageNo = 1
  getIcons()
}

/**
 * current page change callback
 * @author shiloh
 * @date 2025/1/11 23:27
 */
function handleCurrentPageChange() {
  getIcons()
}

// endregion

// region watch

watch(
  () => formData.value.name,
  () => {
    handleSearch()
  },
)

// endregion

// region mounted

onMounted(async () => {
  handleSearch()
})

// endregion
</script>

<style scoped></style>
