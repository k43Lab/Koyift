<template>
  <div class="home-screen">
    <div class="box">
      <span></span>
    </div>
    <div class="cards">
      <el-card>
        <template #header>
          <span> Links </span>
        </template>
        <p>

        </p>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home-screen {
  background-image: url(https://api.lazy.ink/img);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 85vh;
  width: 100vw;
  transform: translateX(-9px);
}

.home-screen .box {
  height: 100%;
  width: 100%;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(5px) !important;
}

.cards {
  margin: 10px;
}
</style>
