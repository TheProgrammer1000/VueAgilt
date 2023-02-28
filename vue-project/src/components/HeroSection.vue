<template>
  <div class="hero-div">
    <video autoplay muted loop alt="video from space on the earh spinning">
      <source :src="videoSource" type="video/mp4" />
    </video>
    <div class="overlay"></div>
    <div class="hero-content">
      <h1>SpaceX Rymdresor</h1>
      <p>
        Du behöver vara kvalificerad för att köpa en rymdresa, gör våran quiz
      </p>
      <div class="button" @click="toQuiz">Quiz</div>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";

const socket = io("ws://localhost:3000");

// send a message to the server
socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });

// receive a message from the server
socket.on("hello from server", (...args) => {
  // ...
});

import router from "../router/index.js";
export default {
  data() {
    return { videoSource: "./src/images/hero_video.mp4" };
  },
  methods: {
    toQuiz() {
      // this.$route.push('/quiz');
      router.push("/quiz");
    },
  },
  created() {
    const socket = io();
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
