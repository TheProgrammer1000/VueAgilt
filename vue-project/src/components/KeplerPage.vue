<script setup></script>
<template>
  <main>
    <div class="background">
      <div class="mars-position">
        <p class="mars-styling">
          The super-Earth that could be mankind's next step in evolution.
          Mankind's next step in discovering other species, is soon only within
          an arm's reach distance. Since Kepler-22b is 2.4 times Earth's radius
          one can only imagine what secrets it holds. To put the size of
          Kepler-22b in perspective, you can imagine that it's as big as 36
          Earths, can your brain even process that? Ours can't..<br /><br />

          Since this planet is further away and harder to reach and because we
          don't know what exists on this planet, we cannot begin offering trips
          until all research and testing are fully complete. However, we aim to
          be finished by 2030 and begin offering trips in 2031. When we launch
          our program for this planet, our expectations are that our prices will
          be quite high, since the cost for our technology for this planet is
          way higher than the other planets.<br /><br />

          Ever wondered if that small green alien is out there? All those aliens
          you've seen in movies, and everytime someone calls you a foil hat,
          perhaps that time has finally come to an end, and those people will
          finally be quiet, and see for themselves. Do you want to find out if
          there are other species out there? Do you want to believe? Do you want
          to see it with your own eyes? Time to find out..<br /><br />

          Stay tuned.<br />
          <i>The truth is out there.</i>
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
  background-image: url("../images/kepler22b-4k.jpg");
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
