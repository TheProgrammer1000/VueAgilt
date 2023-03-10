<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      confirmText: "",
    };
  },
  methods: {
    validate() {
      if (this.name && this.email && this.message) {
        this.confirmText =
          "Tack för ditt meddelande, vi kontaktar dig så fort vi kan!";
        this.name = "";
        this.email = "";
        this.message = "";
      } else {
        this.confirmText = "Var snäll och fyll i alla fälten.";
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button close"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div>
          </div>
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div class="app-contact">PHONE : +46731234561</div>
            </div>
            <div class="screen-body-item">
              <div class="app-form">
                <div class="app-form-group">
                  <input
                    class="app-form-control"
                    placeholder="NAME"
                    v-model="name"
                  />
                </div>
                <div class="app-form-group">
                  <input
                    class="app-form-control"
                    placeholder="EMAIL"
                    v-model="email"
                  />
                </div>
                <div class="app-form-group message">
                  <input
                    class="app-form-control"
                    placeholder="MESSAGE"
                    v-model="message"
                  />
                </div>
                <div class="app-form-group buttons">
                  <button class="app-form-button">CANCEL</button>
                  <button
                    id="send-button"
                    class="app-form-button"
                    @click="validate"
                  >
                    SEND
                  </button>
                </div>
                <p id="confirm-text">{{ confirmText }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  background-color: var(--dark-blue);
}

body {
  font-size: 12px;
}

body,
button,
input {
  font-weight: 700;
  letter-spacing: 1.4px;
}

.background {
  display: flex;
  margin: 20px 0 20px 0;
}

.container {
  padding: 0 2rem;
  max-width: 80vw;
  overflow: hidden;
  height: 100%;
}

p {
  color: white;
}

.screen {
  position: relative;
  background: var(--dark-grey);
  border-radius: 15px;
  margin: 30px 0 30px 0;
  /* box-shadow: 0 0 7px white, 0 0 7px white; */
  box-shadow: 0 0 2rem -0.5rem white;
}

.screen:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: var(--grey-clr);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}

.screen-header-button.close {
  background: var(--dark-blue);
}

.screen-header-button.maximize {
  background: var(--steel-blue-clr);
}

.screen-header-button.minimize {
  background: var(--light-blue-clr);
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--light-blue-clr);
  overflow: hidden;
  font-size: 26px;
}

.app-title:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: var(--light-blue-clr);
}

.app-contact {
  margin-top: auto;
  font-size: 1rem;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color 0.2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  margin: 10px;
  background: none;
  border: none;
  color: var(--light-blue-clr);
  font-size: 14px;
  cursor: pointer;
  border: 1px solid var(--light-blue-clr);
  box-shadow: 0 0 7px var(--light-blue-clr), 0 0 7px var(--light-blue-clr);
  padding: 8px 16px;
  border-radius: 8px;
}

.app-form-button:hover {
  color: white;
  box-shadow: 0 0 7px white, 0 0 7px white;
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}
</style>
