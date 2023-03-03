<script>
export default {
  data() {
    return {
      imageSource: "./src/images/måne.png",
      imageSource2: "./src/images/transparent.png",
    };
  },
};
</script>

<template>
  <main>
    <section class="hero-container">
      <div class="hero">
        <div class="text">
          <h1>SpaceX</h1>
        </div>
      </div>
    </section>
    <div class="container">
      <h1>About Us</h1>
      <article>
        <img class="moon-image" :src="imageSource" />
        <h2>SpaceX</h2>
        <p class="about-text">
          At x we strive to build a future for mankind where the possibility to
          see life outside of earth is a reality. We’ve all been there as kids
          growing up, looking up in the sky towards the stars, wondering what
          might be out there. But it’s always been a fantasy rather than a
          reality. Words like alien life, space travels or planets have always
          been out of our reach. We want to change that and create the
          possibility for every human on earth to travel into outer space. Who
          wouldn’t want to see Mars? The moon? Or perhaps the dark and cold
          mysterious planet Neptune?
        </p>
        <p>
          Since the beginning of 2010 when our project first started by a team
          of five members, all from different backgrounds in different work
          areas, we have put our hearts and minds into this project. Today we’re
          a company of more than 500 members working day and night to continue
          to make this project evolve and last forever.
        </p>
        <img class="moon-image2" :src="imageSource2" />
        <p>
          Space is the next level for humankind, space is the undiscovered
          mystery that has always seemed to be out of mankind's reach. Will you
          be part of history and see the vast, dark but beautiful wonders of
          space? Or will you let it slip away? The choice is yours. When we
          first began this project we discussed the affordability for all people
          on earth. We wanted to make sure that everyone could afford these
          travels into space, and not only a select few. That is why we have
          developed our new technology named “Equilibrium” which in short, gives
          us endless amounts of energy to fuel our travels into space. That is
          why we offer affordable prices that fits everyone, all from smaller
          monthly payments, yearly or even our special VIP passes that give you
          access to travels further into space.
        </p>
        <p>
          Maybe you want to see the edge of the observable universe with your
          own eyes? Our VIP pass gives you access to this! It’s time for
          humanity to take the “next step” in evolving. Humankind has been stuck
          on planet earth far too long. We are ready to enter the final frontier
          of humanity. Question is, are you? Space.. The final frontier.
        </p>
      </article>
    </div>
    <div class="sky-div"><h2>Contact Us</h2></div>
  </main>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../images/test2.jpg);
  height: 100vh;
  align-self: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  align-items: center;
  justify-content: center;
}

.text {
  text-align: center;
  color: white;
}

button {
  border: 1px solid white;
}

.moon-image {
  float: left;
  max-width: 250px;
  shape-outside: polygon(120px -15px, 60.44% 104%, 92.2% 63.21%, 81.02% 17.04%);
  clear: both;
  margin-right: 3rem;
}

.moon-image2 {
  float: right;
  max-width: 250px;
  shape-outside: polygon(
    73px 41px,
    10.89% 60.81%,
    40.05% 94.78%,
    43.43% -2.22%
  );
  margin-left: 3rem;
  clear: both;
}

.container {
  padding: 0 2rem;
  max-width: 80vw;
  overflow: hidden;
  margin: 0 auto;
}

.sky-div {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../images/sky2.jpg);
  height: 30vh;
  align-self: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  align-items: center;
  justify-content: center;
  margin: 20px 0 20px 0;
}

main {
  /* background-color: var(--light-blue-clr); */
  background-color: var(--dark-blue);
}

article {
  margin: 2em 0;
  padding: 2em;
  box-shadow: 0 0 2rem -0.5rem white;
  border-radius: 15px;
  /* box-shadow: 0 0 10px white, 0 0 10px white; */
}

h1 {
  text-align: center;
  margin-top: 20px;
  color: white;
  font-size: 3.5rem;
}

h2 {
  font-size: 2.5rem;
  color: white;
}

p {
  color: white;
}

@media screen and (max-width: 800px) {
  h2 {
    clear: both;
  }

  p {
    clear: both;
  }
  article {
    padding: 1em;
  }

  .container {
    max-width: 95vw;
  }
}

@media screen and (max-width: 450px) {
  .moon-image {
    max-width: 230px;
  }
  .moon-image2 {
    max-width: 230px;
  }
}

@media screen and (max-width: 420px) {
  .moon-image {
    max-width: 210px;
  }
  .moon-image2 {
    max-width: 210px;
  }
}

@media screen and (max-width: 400px) {
  .moon-image {
    max-width: 180px;
  }
  .moon-image2 {
    max-width: 180px;
  }
}

@media screen and (max-width: 350px) {
  .moon-image {
    max-width: 140px;
  }
  .moon-image2 {
    max-width: 140px;
  }
}
</style>
