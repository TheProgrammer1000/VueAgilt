<script>
import { RouterLink, RouterView } from "vue-router";
import TimerComponent from "./components/TimerComp.vue";

import io from "socket.io-client";
import axios from "axios";

const socketInstance = io("http://localhost:3000");

// socketUser.on("unbanned", (isBanned) => {
//   if (isBanned === false) {
//     // this.$store.commit("bannedStarted");
//     console.log("Här från clienten fick från servern");
//     localStorage.setItem("banned", false);
//     console.log(JSON.parse(localStorage.getItem("banned")));
//   } // world
// });

export default {
  data() {
    return {
      // banned: null,
    };
  },
  methods: {},
  components: {
    TimerComponent,
  },

  created() {},
};
</script>

<template>
  <TimerComponent v-if="this.banned" />

  <!-- v-if="this.$store.state.bannedTime" -->
  <RouterView :socketInstance="socketInstance"></RouterView>
</template>

<style scoped></style>
