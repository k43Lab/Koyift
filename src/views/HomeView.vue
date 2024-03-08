<template>
  <div class="home-screen">
    <div class="box">
      <div class="center-box">
        <h1>k43Lab</h1>
        <span>A orgnization witch designed to facilitate communication about technologies.</span>
      </div>
    </div>
    <div class="cards">
      <el-card>
        <template #header>
          <span> Links </span>
        </template>
        <p>
          <el-link href="https://github.com/k43Lab" target="_blank">
            <img alt="Static Badge" src="https://img.shields.io/badge/GitHub-%20?style=flat-square&logo=github&logoColor=white&color=black">
          </el-link>
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-box {
  background-color: rgba(64, 65, 65, 0.705);
  padding: 3rem;
  padding-top: 2rem;
  border-radius: 3px;
}

.cards {
  margin: 10px;
}
</style>
