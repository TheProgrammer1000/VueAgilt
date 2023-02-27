<template>
  <form @submit.prevent="submitForm">
    <input
      type="email"
      v-model="email"
      required
      placeholder="Enter your email address"
    />
    <button type="submit">Subscribe</button>
    <span v-if="subscribed">Thanks for subscribing!</span>
  </form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      email: "",
      subscribed: false,
    };
  },
  methods: {
    submitForm() {
      // Send email and any other data to backend or API endpoint
      console.log("Submitting form with email:", this.email);

      // Reset the email input field to empty after the button has been
      // clicked
      this.email = "";

      // Set the subscribed flag to true, to display the success message
      this.subscribed = true;

      // Hide the success message after 3 seconds of display
      setTimeout(() => {
        this.subscribed = false;
      }, 3000);
    },
  },
});
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="email"] {
  width: 100%;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

input[type="email"]:focus {
  outline: none;
  border-bottom: 1px solid #000;
}

button[type="submit"] {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #333;
}
</style>
