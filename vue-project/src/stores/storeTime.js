import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      bannedTime: true,
      localSet: true,
    };
  },
  mutations: {
    bannedStarted(state) {
      state.bannedTime = false;
      state.localSet = false;
    },
  },
  strict: true,
});
