<template>
  <div v-if="this.banned === false">
    <div class="quiz-div">
      <h1>Welcome to the intro quiz</h1>
      <br /><br />
      <h2>{{ questions[currentQuestion].question }}</h2>
      <br /><br />
      <h3 v-if="errorDisplay">Jalla! Sista Försöket!</h3>
      <br />
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
      <button class="submit-btn" @click="checkAnswer">Submit</button>
      <p>Lifelines:</p>
      <div class="button-container">
        <button class="lifeline-btn" v-if="!callRichardUsed" @click="callRichard()">
          Call Richard
        </button>
        <button class="lifeline-btn" v-if="!fiftyFiftyUsed" @click="fiftyFifty()">50/50</button>

      </div>
      <!--  :style... Changes the color so that Correct displays in green and Incorrect
      in red -->
      <div v-if="timerVisible">Time remaining: {{ time }}</div>
      <p
        v-if="answerMessage"
        :style="{ color: answerMessage === 'Correct!' ? 'green' : 'red' }"
      >
        {{ answerMessage }}
      </p>
      <!-- Supposed to render the score after quiz completion, still working on this //done-->
      <p v-if="quizCompleted">Your score: {{ score }}</p>
    </div>
  </div>
  <div v-else style="margin-top: 20vh">
    <h1>INTE SÅ LÅNGT HÄR, FORTFARANDE BANNAD</h1>
    <iframe
      src="https://vlipsy.com/embed/V1FeavJI?loop=1"
      width="1050"
      height="500"
      frameborder="0"
      id="hero-video"
    ></iframe>

    {{ this.bannedTime }}
  </div>
</template>

<script>
import TimerComponent from "../components/TimerComp.vue";
import router from "../router/index.js";
import axios from "axios";

console.log(localStorage.getItem("bannedTime"));

let start = new Date();

let timeInMilliseconds =
  (start.getTime() - Number(localStorage.getItem("bannedTime"))) / 1000;

console.log("timeInMilliseconds: ", timeInMilliseconds);
if (timeInMilliseconds >= 15) {
  localStorage.setItem("banned", false);
}

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
        // kan lägga till fler frågor här
      ],
      currentQuestion: 0,
      selectedOption: "",
      selectedOptions: [],
      filteredOptions: [],
      score: 0,
      fiftyFiftyUsed: false,
      timerVisible: true,
      time: 15,
      timerId: null,
      tries: 0,
      errorDisplay: false,
      banned: false,
      quizCompleted: false,
      answerMessage: "",
      callRichardUsed: false,
    };
  },

  created() {
    this.timeRemaining = this.time;
    this.quizCompleted = false;
    this.answerMessage = "";
  },

  components: {},

  mounted() {},

  methods: {
    checkAnswer() {
      if (this.timerRunning) {
        clearInterval(this.timerId);
      }

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
          this.time = 15;
          this.timerVisible = true;
          this.timerRunning = false;
          this.tries += 1;
          this.errorDisplay = true;
          this.callRichardUsed = false;
          this.startTimer(); // startar tiden på första frågan buggfix //done

          //   resettaar 50/50 button om current question är använd så försvinner den //done
          const currentQuestion = this.questions[this.currentQuestion];
          if (
            currentQuestion.fiftyFiftyUsed &&
            currentQuestion.answer !== this.selectedOptions[i]
          ) {
            currentQuestion.options = currentQuestion.originalOptions;
            currentQuestion.fiftyFiftyUsed = false;
            this.fiftyFiftyUsed = false;
          }
        }
      } else {
        this.currentQuestion += 1;
        this.filteredOptions = this.questions[this.currentQuestion].options;
        if (this.timerVisible) {
          this.startTimer();
        }
      }
    },

    fiftyFifty() {
      if (!this.fiftyFiftyUsed) {
        const question = this.questions[this.currentQuestion];
        const correctAnswer = question.answer;
        const incorrectAnswers = question.options.filter(
          (option) => option !== correctAnswer
        );
        const randomIndex = Math.floor(Math.random() * incorrectAnswers.length);
        const incorrectAnswerToRemove = incorrectAnswers[randomIndex];
        question.options = question.options.filter(
          (option) =>
            option === correctAnswer || option === incorrectAnswerToRemove
        );
        this.fiftyFiftyUsed = true;
        //  Markerar att 50/50 knappen har blivit använd
        question.fiftyFiftyUsed = true;
      }
    },

    startTimer() {
      this.timerRunning = true;
      this.time = 15; // reset timer value
      this.timerId = setInterval(() => {
        if (this.time > 0) {
          this.time--;
        } else {
          clearInterval(this.timerId);
          this.timerRunning = false;
          this.checkAnswer();
        }
      }, 1000);
    },
    callRichard() {
      if (!this.callRichardUsed) {
        var callUrl =
          "https://teams.microsoft.com/l/call/0/0?users=richard.carlsson@iths.se";
        window.open(callUrl, "_blank").focus();
        this.time = this.time + 30;
        this.callRichardUsed = true;
      }
    },
    isQuizFinished() {
      return this.questions.length == this.selectedOptions.length;
    },
  },
  mounted() {
    this.startTimer();
  },
  created() {
    // this.banned = JSON.parse(localStorage.getItem("banned"));
    if (JSON.parse(localStorage.getItem("banned") !== null)) {
      this.banned = JSON.parse(localStorage.getItem("banned"));
    }
  },

  watch: {
    tries(newValue) {
      if (newValue === 1) {
        this.errorDisplay = true;
      } else if (newValue === 2) {
        if (this.questions.length !== this.selectedOptions.length) {
          // console.log("banned");
          // JSON.parse(localStorage.setItem("banned"));
          router.push("banned");
        }
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

.submit-btn {
margin: 0 0 30px 0;
}

/* .lifeline-btn {

} */

.button-container {
  display: flex;
  width: 400px;
  height: 100px;
  align-items: center;
  justify-content: center;
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

#hero-video {
  margin-left: 15%;
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
