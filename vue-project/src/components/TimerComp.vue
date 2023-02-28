<template>
  <h1>Timer: {{ this.timer }}</h1>
</template>

<script>
import router from "../router/index.js";
// import TimerComponent from "./components/TimerComp.vue";

export default {
  data() {
    return {
      timer: 0,
    };
  },

  components: {
    // TimerComponent,
  },
  methods: {
    myTimer() {
      let start = new Date();

      let timeInMilliseconds =
        (start.getTime() - Number(localStorage.getItem("bannedTime"))) / 1000;

      if (timeInMilliseconds >= 15) {
        this.$router.go("/home");

        // this.timer = "";
        // clearInterval(this.stopTimer);
      } else {
        this.timer = 15 - timeInMilliseconds;
      }
      console.log("timeInMilliseconds: ", timeInMilliseconds);
    },
  },
  created() {
    const stopTimer = setInterval(this.myTimer, 1000);
  },
};
</script>

<style></style>
