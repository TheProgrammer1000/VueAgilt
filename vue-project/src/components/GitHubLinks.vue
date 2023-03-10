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

<style scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
.header {
  margin-top: 10px;
  color: white;
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
  border: white 1px solid;
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 0 10px white, 0 0 20px white;
  margin: 30px;
}
.button:hover {
  box-shadow: 0 0 10px var(--steel-blue-clr), 0 0 20px var(--steel-blue-clr);
}
</style>
