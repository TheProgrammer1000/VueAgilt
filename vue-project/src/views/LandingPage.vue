<script setup>
import NavBar from "../components/NavBar.vue";
import EmailForm from "../components/EmailForm.vue";
import PlanetCards from "../components/PlanetCards.vue";
import GitHubLinks from "../components/GitHubLinks.vue";
</script>

<template>
  <NavBar />
  <main>
    <PlanetCards />
  </main>
  <footer>
    <GitHubLinks />
    <EmailForm />
  </footer>
</template>
