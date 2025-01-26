<!--
  *
  * @author shiloh
  * @date 2025/1/26 16:10
-->
<template>
  <div class="search-box row items-center justify-between q-pa-sm">
    <q-icon name="search" size="sm" />
    <span class="q-ml-sm">Search</span>
    <div class="shortcut">Ctrl K</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.search-box {
  background-color: #e0e0e0;
  color: #212121;
  border-radius: 20px;
}

.search-box:hover {
  cursor: pointer;
}

.shortcut {
  margin: 0 0 0 12px;
  background-color: #bdbdbd;
  padding: 0 4px;
  border-radius: 0 10px 10px 0;
}
</style>
