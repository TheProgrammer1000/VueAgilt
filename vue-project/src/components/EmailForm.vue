<template>
  <form @submit.prevent="submitForm">
    <input
      type="email"
      v-model="email"
      required
      placeholder="Enter your email address"
    />
    <button type="submit">Subscribe</button>
  </form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      email: "",
    };
  },
  methods: {
    submitForm() {
      // Send email and any other data to backend or API endpoint right now
      // just console logging the user input.
      console.log("Submitting form with email:", this.email);
    },
  },
});
</script>
