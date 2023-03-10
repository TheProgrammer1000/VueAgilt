<template>
  <div class="card-container">
    <div v-for="(card, index) in cards" :key="index" class="card">
      <img :src="card.imageUrl" :alt="card.title" class="card-image" />
      <div class="card-content">
        <h2 class="card-title">{{ card.title }}</h2>
        <p class="card-text">{{ card.description }}</p>
        <div class="card-buttons">
          <a :href="card.buttonLink2" class="card-button">{{
            card.buttonText2
          }}</a>

          <div class="card-button-spacer"></div>
          <a :href="card.buttonLink1" class="card-button">{{
            card.buttonText1
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      cards: [
        {
          title: "Mars",
          description:
            "The fourth planet from the Sun and the second-smallest planet in the Solar System.",
          imageUrl: "src/assets/PlanetPictures/Mars.jpeg",
          buttonLink1: "MarsPage",
          buttonText1: "Read More",
          buttonLink2: "TicketPage",
          buttonText2: "Book Tickets",
        },
        {
          title: "Moon",
          description:
            "The only natural satellite of Earth and the fifth largest moon in the Solar System.",
          imageUrl: "src/assets/PlanetPictures/Moon.jpeg",
          buttonLink1: "MoonPage",
          buttonText1: "Read More",
          buttonLink2: "TicketPage",
          buttonText2: "Book Tickets",
        },
        {
          title: "Kepler-22b",
          description:
            "The super-Earth at 2.4 times the size of earth, that could be covered in a super ocean.",
          imageUrl: "src/assets/PlanetPictures/Kepler-442b_2.jpeg",
          buttonLink1: "KeplerPage",
          buttonText1: "Read More",
          buttonLink2: "TicketPage",// fixed button links to ticket page
          buttonText2: "Book Tickets",
        },
      ],
    };
  },
});
</script>

<style scoped>
.card-container {
  max-width: 1100px;
  padding: 30px;
  display: grid;
  margin: 10px auto;
  list-style: none;
  grid-gap: 60px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  overflow: hidden;
}

.card {
  margin: 40px 0 10px 0;
  max-width: 280px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.2s;
  background-color: transparent;
  box-shadow: 0 0 2rem -0.5rem white;
  color: white;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 10px;
}

.card-title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.card-text {
  margin: 10px 0;
  font-size: 16px;
}

.card-buttons {
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  margin-top: 10px;
}

.card-button {
  display: inline-block;
  padding: 6px 12px;
  background-color: #1a1a1a;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.2s;
}

.card-button:hover {
  background-color: #555;
}

.card-button-spacer {
  height: 10px;
}
</style>
