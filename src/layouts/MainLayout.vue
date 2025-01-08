<template>
  <q-layout view="lHh lpR lFf">
    <!--    header start-->
    <header-view />
    <!--    header end-->

    <!--    sidebar start-->
    <sidebar-menu />
    <!--    sidebar end-->

    <!--    content start-->
    <main-content />
    <!--    content end-->

    <!--    footer start-->
    <footer-view />
    <!--    footer end-->
  </q-layout>
</template>

<script setup lang="ts">
import HeaderView from 'layouts/components/HeaderView.vue'
import SidebarMenu from 'layouts/components/SidebarMenu.vue'
import FooterView from 'layouts/components/FooterView.vue'
import MainContent from 'layouts/components/MainContent.vue'
</script>
