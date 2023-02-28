<template>
  <h1>Timer: {{ this.timer }}</h1>
</template>

<script>
import router from "../router/index.js";

export default {
  data() {
    return {
      timer: 0,
    };
  },
  methods: {
    myTimer() {
      let start = new Date();

      let timeInMilliseconds =
        (start.getTime() - Number(localStorage.getItem("bannedTime"))) / 1000;

      if (timeInMilliseconds >= 15) {
        this.$router.go("/home");
        // router.push({
        //   name: "home",
        // });

        console.log("awdawdaw");
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
