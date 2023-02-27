<script>
import { RouterLink, RouterView } from "vue-router";
import TimerComponent from "./components/TimerComp.vue";

export default {
  data() {
    return {
      banned: false,
    };
  },
  methods: {},
  components: {
    TimerComponent,
  },

  created() {
    this.banned = JSON.parse(localStorage.getItem("banned"));
  },
  watch: {
    banned(newValue) {
      console.log("newValue: ", newValue);
    },
  },
};
</script>

<template>
  <TimerComponent v-if="this.banned" />

  <!-- v-if="this.$store.state.bannedTime" -->
  <RouterView />
</template>

<style scoped></style>
