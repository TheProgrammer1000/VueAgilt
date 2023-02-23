<template>
  <div class="links">
    <h2 class="header">Made by</h2>
    <div class="button-container">
      <a
        v-for="user in githubUsers"
        :key="user.name"
        :href="user.link"
        class="button"
        target="_blank"
        >{{ user.name }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Links",
  data() {
    return {
      githubUsers: [
        { name: "Simon", link: "https://github.com/SimonFritzNguesseu" },
        { name: "Dennis", link: "https://github.com/TheProgrammer1000" },
        { name: "Rickard", link: "https://github.com/locorickardo" },
        { name: "David", link: "https://github.com/dejv0ld" },
        { name: "Yavuz", link: "https://github.com/Yavuziths" },
      ],
    };
  },
};
</script>

<style>
/* styles omitted for brevity */
</style>

<style>
.links {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  margin-bottom: 1rem;
}
.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}
.button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
}
.button:hover {
  background-color: #333;
}
</style>
