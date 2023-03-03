<template>
  <h2
    style="
      position: absolute;
      margin-left: 23vw;
      margin-top: 10vh;
      font-size: 3rem;
    "
  >
    Banned! Försök igen om 2 timmar!
  </h2>
  <iframe
    src="https://vlipsy.com/embed/V1FeavJI?loop=1"
    width="1050"
    height="500"
    frameborder="0"
    id="hero-video"
  ></iframe>

  <!-- </video> -->
</template>

<script>
import router from "../router/index.js";

console.log(localStorage.getItem("bannedTime"));

let start = new Date();

let timeInMilliseconds =
  (start.getTime() - Number(localStorage.getItem("bannedTime"))) / 1000;

console.log("timeInMilliseconds: ", timeInMilliseconds);
if (timeInMilliseconds >= 15) {
  localStorage.setItem("banned", false);
}

export default {
  data() {
    return { videoSource: "./src/images/hero_video.mp4" };
  },
  methods: {},

  created() {
    localStorage.setItem("banned", true);
    let start = new Date();

    localStorage.setItem("bannedTime", start.getTime());
    console.log(
      'localStorage.getItem("bannedTime")',
      localStorage.getItem("bannedTime")
    );

    router.push("quiz");
  },
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: -1;
}
.hero-div {
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

#hero-video {
  margin-left: 15%;
  margin-top: 10%;
}

h1 {
  font-size: 64px;
}
p {
  font-size: 24px;
}

.button {
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
}

.button:hover {
  background-color: white;
  color: black;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.hero-div,
video {
  position: absolute;
  top: 0;
  z-index: -1;
  min-height: 100%;
  min-width: 100%;
}
</style>
