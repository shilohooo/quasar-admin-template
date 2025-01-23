<template>
  <q-layout view="lHh lpR lFr">
    <!--    header start-->
    <header-view />
    <!--    header end-->

    <!--    sidebar start-->
    <sidebar-menu />
    <!--    sidebar end-->

    <!--    content start-->
    <main-content />
    <!--    content end-->
  </q-layout>
</template>

<script setup lang="ts">
import HeaderView from 'layouts/components/HeaderView.vue'
import SidebarMenu from 'layouts/components/SidebarMenu.vue'
import MainContent from 'layouts/components/MainContent.vue'
</script>
