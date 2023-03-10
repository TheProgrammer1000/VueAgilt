<script setup>
import NavBar from "../components/NavBar.vue";
import AboutUsPage from "../components/AboutUsPage.vue";
import ContactForm from "../components/ContactForm.vue";
import EmailForm from "../components/EmailForm.vue";
import GitHubLinks from "../components/GitHubLinks.vue";
</script>

<template>
  <main>
    <NavBar />
    <AboutUsPage />
    <ContactForm />
  </main>
  <footer>
    <EmailForm />
        <GitHubLinks />
        <div class="copywright-div"><p>Copywright 2023, Prime Travel. All Rights Reserved.</p></div>
  </footer>

</template>

<style scoped>
main {
  background-color: var(--dark-blue);
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
