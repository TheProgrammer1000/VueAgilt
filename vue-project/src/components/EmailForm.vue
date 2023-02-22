<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    submitForm() {
      // Send form data to server using an HTTP request
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <label for="email">Email:</label>
    <input id="email" v-model="email" type="email" required />
    <span v-if="$v.email.$error">Please enter a valid email address.</span>
    <button type="submit">Subscribe</button>
  </form>
</template>
