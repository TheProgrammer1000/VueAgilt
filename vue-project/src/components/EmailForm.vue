<template>
  <div class="form-container">
    <h3>Subscribe to our newsletter!</h3>
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
  </div>
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
        
      console.log("Submitting form with email:", this.email);

      this.email = "";

      this.subscribed = true;

      setTimeout(() => {
        this.subscribed = false;
      }, 3000);
    },
  },
});
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;

  align-self: center;

  align-items: center;
  justify-content: center;
  text-align: center;
}

h3 {
  color: white;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="email"] {
  width: 300px;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  background-color: transparent;
  color: var(--steel-blue-clr);
}

input[type="email"]:focus {
  outline: none;
  border-bottom: 1px solid var(--steel-blue-clr);
}

button[type="submit"] {
  background-color: transparent;
  padding: 12px 24px;
  border: 1px solid white;
  display: inline-block;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: 0 0 10px white, 0 0 20px white;
  border-radius: 8px;
  margin: 20px;
  color: white;
}

button[type="submit"]:hover {
  box-shadow: 0 0 10px var(--steel-blue-clr), 0 0 20px var(--steel-blue-clr);
}
</style>
