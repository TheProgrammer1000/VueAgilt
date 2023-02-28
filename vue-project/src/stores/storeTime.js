import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      banned: false,
      socket: null,
    };
  },
  mutations: {
    bannedStarted(state) {
      state.banned = true;
      console.log("You are banned!");
      console.log("state.banned = ", state.banned);
    },
    setSocked(state, socket) {
      state.socket = socket;
    },
  },
  strict: true,
});
