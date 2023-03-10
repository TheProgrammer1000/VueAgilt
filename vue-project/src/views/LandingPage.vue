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
    <div class="copywright-div">
      <p>Copywright 2023, Prime Travel. All Rights Reserved.</p>
    </div>
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
  /*   background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../images/sky2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; */
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.copywright-div {
  height: 8vh;
  color: white;
  background-color: #131313;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.copywright-div > p {
  margin: 5px;
}
</style>
