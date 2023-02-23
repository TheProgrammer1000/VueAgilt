<template>
  <div class="links">
    <h2 class="header">Made by</h2>
    <div class="button-container">
      <a
        href="https://github.com/SimonFritzNguesseu"
        class="button"
        target="_blank"
        >Simon</a
      >
      <a
        href="https://github.com/TheProgrammer1000"
        class="button"
        target="_blank"
        >Dennis</a
      >
      <a href="https://github.com/locorickardo" class="button" target="_blank"
        >Rickard</a
      >
      <a href="https://github.com/dejv0ld" class="button" target="_blank"
        >David</a
      >
      <a href="https://github.com/Yavuziths" class="button" target="_blank"
        >Yavuz</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Links",
};
</script>

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
