<template>
  <HeaderComponent></HeaderComponent>
  <main>
    <RouterView></RouterView>
  </main>
  <!-- <el-backtop :right="100" :bottom="100" /> -->
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
</script>
