<script>
import { RouterLink, RouterView } from "vue-router";
import TimerComponent from "./components/TimerComp.vue";

export default {
  data() {
    return {
      banned: null,
    };
  },
  methods: {},
  components: {
    TimerComponent,
  },

  created() {
    this.banned = JSON.parse(localStorage.getItem("banned"));
    console.log(
      'localStorage.getItem("banned"): ',
      JSON.parse(localStorage.getItem("banned"))
    );
  },
};
</script>

<template>
  <TimerComponent v-if="banned" />

  <!-- v-if="this.$store.state.bannedTime" -->
  <RouterView />
</template>

<style scoped></style>
