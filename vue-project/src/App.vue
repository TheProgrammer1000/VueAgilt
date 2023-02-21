<script setup>
import { RouterLink, RouterView } from "vue-router";
import IntroQuiz from './components/IntroQuiz.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <IntroQuiz />
</template>

<style scoped></style>
