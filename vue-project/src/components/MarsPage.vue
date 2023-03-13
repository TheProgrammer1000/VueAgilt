<script setup>
import NavBar from "../components/NavBar.vue";
</script>

<template>
<NavBar />
  <main>
    <div class="background">
      <div class="mars-position">
        <p class="mars-styling">
          With a low temperature as close to -100° celsius and a temperature as
          high as -4° celsius, the regular winter-loving person should feel
          right at home on Mars! On Mars we have started building and developing
          our first society with houses, stores of all kinds, banks, bars,
          entertainment, libraries and all that you could ever want! Our plan
          moving forward is to build a society on Mars similar to Earth but with
          some changes in mind. Our vision is to have a crime free society and a
          “no tolerance” mindset, which means that if you commit a crime, you
          will be deported back to Earth instantly after your trial.<br /><br />

          On Mars, our premium packages (limited amount) include your own
          apartment or house (first come first served). You will also be able to
          sign up for our transportation package which includes our first mass
          produced space car. How cool is that? But be sure to subscribe now
          before they run out!<br /><br />

          We are very excited that our plans within our company are moving
          forward with such haste. One can only imagine what the future for
          mankind is going to look like in twenty years. With Mars being our
          first “civilized” planet, we have much in store for you that you DO NOT
          want to miss out on!
        </p>
        <div>
          <router-link to="/ticketpage">
            <button>Book Tickets</button>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  text-align: center;
}

.background {
  background-image: url("../images/mars-4k.jpg");
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
}

.mars-styling {
  font-size: 16px;
  color: white;
  text-shadow: 2px 2px 0 #333;
}

.mars-position {
  margin: auto;
  width: 640px;
  padding: 50px;
}

button {
  padding: 15px 40px;
  border: 1px solid white;
  display: inline-block;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: 0 0 10px white, 0 0 20px white;
  border-radius: 8px;
  margin: 20px;
  background-color: transparent;
  color: white;
}

button:hover {
  background-color: white;
  color: black;
}
</style>
