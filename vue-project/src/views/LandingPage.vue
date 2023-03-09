<script setup>
import NavBar from "../components/NavBar.vue";
import EmailForm from "../components/EmailForm.vue";
import PlanetCards from "../components/PlanetCards.vue";
import GitHubLinks from "../components/GitHubLinks.vue";
import HeroLandingPage from "../components/HeroLandingPage.vue";
</script>

<template>
  <NavBar />
  <main>
    <HeroLandingPage />
    <PlanetCards />
  </main>
  <footer>
    <EmailForm />
    <GitHubLinks />
  </footer>
</template>

<style scoped>
main {
  background-color: var(--dark-blue);
  height: 100%;
  align-self: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

footer {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../images/sky2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
