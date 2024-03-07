<template>
  <div class="header" style="transform: translateY(-15px);">
    <el-avatar :size="48" src="/k43lab.png" class="header-logo" />
    <span class="header-title"> k43Lab </span>
  </div>
  <el-menu :default-active="activeIndex" mode="horizontal">
    <el-menu-item index="1" @click="router.push('/')">Home</el-menu-item>
    <el-menu-item index="2" @click="router.push('/about')">About</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

let activeIndex = ref('1')
</script>
