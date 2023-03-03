<template>
    <div class="card-container">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <img :src="card.imageUrl" :alt="card.title" class="card-image" />
        <div class="card-content">
          <h2 class="card-title">{{ card.title }}</h2>
          <p class="card-text">{{ card.description }}</p>
          <div class="card-buttons">
            <a :href="card.buttonLink1" class="card-button">{{
              card.buttonText1
            }}</a>
            <div class="card-button-spacer"></div>
            <a :href="card.buttonLink2" class="card-button">{{
              card.buttonText2
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
          buttonText1: "More info",
          buttonLink2: "https://www.example.com/mars-tickets",
          buttonText2: "Book Tickets",
        },
        {
          title: "Moon",
          description:
            "The only natural satellite of Earth and the fifth largest moon in the Solar System.",
          imageUrl: "src/assets/PlanetPictures/Moon.jpeg",
          buttonLink1: "MoonPage",
          buttonText1: "More info",
          buttonLink2: "https://www.example.com/moon-tickets",
          buttonText2: "Book Tickets",
        },
        {
          title: "Kepler-22b",
          description:
            "A confirmed exoplanet about 1,206 light-years away from Earth in the constellation Lyra.",
          imageUrl: "src/assets/PlanetPictures/Kepler-442b.jpeg",
          buttonLink1: "KeplerPage",
          buttonText1: "More info",
          buttonLink2: "https://www.example.com/kepler-442b-tickets",
          buttonText2: "Book Tickets",
        },
      ],
    };
  },
});
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
}

.card {
  width: 30%;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.2s;
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
}

.card-text {
  margin: 10px 0;
  font-size: 16px;
}

.card-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.card-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
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
