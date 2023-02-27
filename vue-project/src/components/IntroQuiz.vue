<template>
  <div class="quiz-div">
    <h1>Welcome to the intro quiz</h1>
    <br /><br />
    <h2>{{ questions[currentQuestion].question }}</h2>
    <ul>
      <li
        v-for="(option, index) in questions[currentQuestion].options"
        :key="index"
        name="radAnswer"
        value="radAnswer"
      >
        <label>
          <input
            :value="option"
            name="my_options"
            type="radio"
            v-model="selectedOption"
          />
          {{ option }}
        </label>
      </li>
    </ul>

    <button @click="checkAnswer">Submit</button>
    <!--  :style... Changes the color so that Correct displays in green and Incorrect
    in red -->
    <p
      v-if="answerMessage"
      :style="{ color: answerMessage === 'Correct!' ? 'green' : 'red' }"
    >
      {{ answerMessage }}
    </p>
    <!-- Supposed to render the score after quiz completion, still working on this -->
    <p v-if="quizCompleted">Your score: {{ score }}</p>
  </div>
</template>

<script>
import router from "../router/index.js";
export default {
  data() {
    return {
      questions: [
        {
          question: "1. Who was the first person in space?",
          options: [
            "Neil Armstrong",
            "Pavel Popovich",
            "Yuri Gagarin",
            "Alan Shepard",
          ],
          answer: "Yuri Gagarin",
        },
        {
          question: "2. Who was the first person on the moon?",
          options: [
            "Yuri Gagarin",
            "Buzz Aldrin",
            "Neil Armstrong",
            "Gherman Titov",
          ],
          answer: "Neil Armstrong",
        },
        {
          question:
            "3. How fast does a rocket need to travel to get into orbit around earth?",
          options: ["28319 km/h", "14273 km/h", "31476 km/h", "18454 km/h"],
          answer: "28319 km/h",
        },
        {
          question: "4. Which one of these is not a planet?",
          options: ["Jupiter", "Saturn", "Pluto", "Uranus"],
          answer: "Pluto",
        },
        {
          question: "5. What is the temperature approxitmately in space?",
          options: [
            "-50 celsius",
            "-270 celsius",
            "-105 celsius",
            "-147 celsius",
          ],
          answer: "-270 celsius",
        },
        // More questions can be added here
      ],
      currentQuestion: 0,
      selectedOption: "",
      selectedOptions: [],
      score: 0,
      answerMessage: "",
    };
  },

  methods: {
    checkAnswer() {
      this.selectedOptions.push(this.selectedOption);
      this.selectedOption = "";
      if (this.questions.length == this.selectedOptions.length) {
        for (let i = 0; i < this.selectedOptions.length; i++) {
          if (this.selectedOptions[i] == this.questions[i].answer) {
            this.score += 1;
          }
        }
        if (parseInt(this.score) == parseInt(this.selectedOptions.length)) {
          console.log("gratz you got everything right");
          router.push("/landing");
        } else {
          this.currentQuestion = 0;
          this.selectedOption = "";
          this.selectedOptions = [];
          this.score = 0;
        }
      } else {
        this.currentQuestion += 1;
      }
    },
  },
};
</script>

<style scoped>
.quiz-div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../images/quiz_background.webp);
}

button {
  color: white;
  border: 1px solid white;
  box-shadow: 0 0 10px white, 0 0 20px white;
  background-color: transparent;
  margin-left: 20px;
  border-radius: 8px;
  padding: 12px 24px;
  text-align: center;
}

button:hover {
  box-shadow: 0 0 10px #5281ad, 0 0 20px #5281ad;
  border: 1px solid #5281ad;
  color: white;
}

h1 {
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}
ul {
  margin-bottom: 20px;
}

li:hover {
  color: var(--steel-blue-clr);
}
li {
  margin: 0 auto;
}

input[type="radio"] {
  box-sizing: border-box;
  appearance: none;
  background: white;
  border: 2px solid white;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  vertical-align: middle;
}

input[type="radio"]:checked {
  background: var(--steel-blue-clr);
}
</style>
