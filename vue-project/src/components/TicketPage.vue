<template>
  <div class="all-container">
    <div class="product-card" v-if="checkoutButton === true">
      <div class="heading-container">
        <h1>Buy your tickets here</h1>
        <i
          type="button"
          @click="showCart"
          class="fa fa-shopping-cart"
          style="font-size: 36px"
        ></i>
      </div>
      <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p class="price">{{ product.price }}</p>
      </div>
      <div class="product-options">
        <div class="option">
          <p>Choose your package</p>
          <select id="space" v-model="selectedOption">
            <option
              v-for="option in product.options"
              :key="option.id"
              :value="option.price"
              :disabled="option.space"
            >
              {{ option.package }}
              {{ option.name }}
              {{ option.space }}
              {{ option.currency }}
              {{ option.price }}
            </option>
          </select>
        </div>
        <div class="option">
          <label for="seated-together">Seated together ($50 per person)</label>
          <input
            type="checkbox"
            id="seated-together"
            v-model="seatedTogether"
          />
        </div>
        <div class="option">
          <label for="quantity"></label>
          <div class="quantity-controls">
            <button @click="decrement">-</button>
            <span>{{ quantity }}</span>
            <button @click="increment">+</button>
          </div>
        </div>
        <div class="option">
          <button @click="addToCart">Add to Cart</button>
        </div>
      </div>
      <p>Total Amount: ${{ totalPrice }}</p>
    </div>
    <div class="cart-div" v-if="cartButton === true" ref="cartDiv">
      <div class="item-container" v-if="checkoutButton === true">
        <h2>Cart</h2>
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">
            {{ item.package }} {{ item.name }} - ${{ item.price }}
            <div class="cart-quantity-div">
              <div id="quantity">
                <button class="btn" @click="decreaseQuantity(index)">-</button>
                <span class="cart-span">{{ item.quantity }}</span>
                <button class="btn" @click="increaseQuantity(index)">+</button>
              </div>
              <button class="btn" id="bin-btn" @click="removeFromCart(index)">
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </li>
        </ul>
        <hr />
        <p id="cart-total">Total Cost: ${{ cartTotal }}</p>
      </div>

      <button
        class="pay-button"
        @click="showPaymentFormMethod"
        v-if="checkoutButton"
      >
        Checkout
      </button>
      <div class="paymentform-container" v-if="showPaymentForm">
        <div class="payment-form">
          <div class="row">
            <div class="col-75">
              <div class="container">
                <form action="/action_page.php">
                  <div class="row">
                    <div class="col-50">
                      <h3>Billing Address</h3>
                      <label for="fname"
                        ><i class="fa fa-user"></i> Full Name</label
                      >
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="John M. Doe"
                      />
                      <label for="email"
                        ><i class="fa fa-envelope"></i> Email</label
                      >
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                      />
                      <label for="adr"
                        ><i class="fa fa-address-card-o"></i> Address</label
                      >
                      <input
                        type="text"
                        id="adr"
                        name="address"
                        placeholder="542 W. 15th Street"
                      />
                      <label for="city"
                        ><i class="fa fa-institution"></i> City</label
                      >
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                      />

                      <div class="row">
                        <div class="col-50">
                          <label for="state">State</label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="NY"
                          />
                        </div>
                        <div class="col-50">
                          <label for="zip">Zip</label>
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            placeholder="10001"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-50">
                      <h3>Payment</h3>
                      <label for="fname">Accepted Cards</label>
                      <div class="icon-container">
                        <i class="fa fa-cc-visa" style="color: navy"></i>
                        <i class="fa fa-cc-amex" style="color: blue"></i>
                        <i class="fa fa-cc-mastercard" style="color: red"></i>
                        <i class="fa fa-cc-discover" style="color: orange"></i>
                      </div>
                      <label for="cname">Name on Card</label>
                      <input
                        type="text"
                        id="cname"
                        name="cardname"
                        placeholder="John More Doe"
                      />
                      <label for="ccnum">Credit card number</label>
                      <input
                        type="text"
                        id="ccnum"
                        name="cardnumber"
                        placeholder="1111-2222-3333-4444"
                      />
                      <label for="expmonth">Exp Month</label>
                      <input
                        type="text"
                        id="expmonth"
                        name="expmonth"
                        placeholder="September"
                      />

                      <div class="row">
                        <div class="col-50">
                          <label for="expyear">Exp Year</label>
                          <input
                            type="text"
                            id="expyear"
                            name="expyear"
                            placeholder="2018"
                          />
                        </div>
                        <div class="col-50">
                          <label for="cvv">CVV</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="352"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <label>
                    <input type="checkbox" checked="checked" name="sameadr" />
                    Shipping address same as billing
                  </label>
                  <button class="pay-button" @click="pay()">
                    Pay ${{ cartTotal }}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- <button class="pay-button" @click="pay()">Pay ${{ cartTotal }}</button> -->
      </div>
    </div>
    <div
      class="order-confirmation"
      ref="confirmation"
      v-if="showConfirmationMessage"
    >
      <h2>Order Confirmation<br /><br /></h2>
      <div class="confirmation-message" v-if="showConfirmationMessage">
        <p class="check-mark">✅</p>
        <p class="order-text">
          Your order has been placed. <br />Thank you for your purchase!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cartButton: false,
      checkoutButton: true,
      showPaymentForm: false,
      seatedTogether: false,
      selectedOption: 0,
      quantity: 1,
      cartItems: [],
      showConfirmationMessage: false, // add showConfirmationMessage property
    };
  },
  computed: {
    //Calculates the total cost of the cartItems array then return the total cost. (Davidj)
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    /* calculates the total price for the choosen product depending on the
    quantity of the product.
    Also if the seated together checkbox is checked it multiplies the seated together price
    with the quantity of tickets and adds to the total price   (DavidJ)*/
    totalPrice() {
      let price = this.selectedOption * this.quantity;
      if (this.seatedTogether) {
        price += 50 * this.quantity;
      }
      return price;
    },
  },
  methods: {
    //add product and quantity of the product to cart (Davidj)
    addToCart() {
      const selectedOption = this.product.options.find(
        (option) => option.price === this.selectedOption
      );
      const product = {
        name: selectedOption.name,
        price: this.totalPrice,
        seatedTogether: this.seatedTogether,
        quantity: this.quantity,
        package: selectedOption.package,
      };
      this.cartItems.push(product);
      this.quantity = 1;
    },
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    pay() {
      //when clicking on pay-button this sets the showConfirmationMessage to true so that the confirmation-div appears. (Davidj)
      this.showConfirmationMessage = true;
      //sets cartButton to false when pressing pay-button and then hides the cart. (Davidj)
      this.cartButton = false;
    },
    //removes product from the cart list depending on what index the argument takes. (Davidj)
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
    //Increases the quantity of the specific product in the cart, also updates the prices when the quantity increases. (Davidj)
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
      this.cartItems[index].price +=
        this.cartItems[index].price / (this.cartItems[index].quantity - 1);
    },
    //Decreases the quantity of the specific product in the cart, also updates the prices when the quantity decreases. (Davidj)
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
        this.cartItems[index].price -=
          this.cartItems[index].price / (this.cartItems[index].quantity + 1);
      } else {
        this.cartItems.splice(index, 1);
      }
    },
    //When clicking checkoutbutton this method hides the checkout-button and shows the payment-form. (DavidJ)
    showPaymentFormMethod() {
      this.showPaymentForm = true;
      this.checkoutButton = false;
    },
    //When clicking the shoppingcart icon this will show the shoppingcart-div. (Davidj)
    showCart() {
      this.cartButton = true;
      //Scrolls down to shopping cart div. (Davidj)
      this.$nextTick(() => {
        this.$refs.cartDiv.scrollIntoView({ behavior: "smooth" });
      });
    },
  },
};
</script>

<style scoped>
.heading-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* container */
.all-container {
  height: 100vh;
  background-color: var(--dark-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 0px;
  margin: 0 auto;
  padding-top: 40px;
}

.cart-div {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 75vw;
  box-shadow: 0 0 2rem -0.5rem white;
  padding: 15px;
  margin: 60px 30px 30px 30px;
}

.order-confirmation {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 75vw;
  height: 518px;
  box-shadow: 0 0 2rem -0.5rem white;
  padding: 15px;
  margin: 60px 30px 30px 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
}

ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  color: white;
  /* height: 300px; */
}

li {
  list-style: none;
}

h2 {
  overflow: hidden;
  margin-bottom: 5px;
  color: white;
}

p {
  color: rgb(202, 199, 199);
}

#cart-total {
  overflow: hidden;
  margin-top: 10px;
}

.pay-button {
  padding: 15px 40px;
  border: 1px solid #4caf50;
  display: inline-block;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.5s ease;
  border-radius: 8px;
  margin: 20px 0 20px 0;
  background-color: #4caf50;
  color: white;
  overflow: hidden;
  width: 100%;
}

.cart-quantity-div {
  display: flex;
  align-items: center;
}

#quantity {
  overflow: hidden;
  display: flex;
  background-color: var(--steel-blue-clr);
  border-radius: 8px;
  height: 30px;
  align-items: center;
  justify-content: center;
}

.cart-span {
  padding: 0 5px 0 5px;
}
.btn {
  color: white;
  font-size: 24px;
}

.btn:hover {
  background-color: var(--light-blue-clr);
}

#bin-btn {
  margin-top: 10px;
  color: var(--steel-blue-clr);
}

#bin-btn:hover {
  color: red;
  background-color: transparent;
}

.product-card {
  width: 75vw;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 16px;
  margin: 50px 30px 30px 30px;
  color: white;
  box-shadow: 0 0 2rem -0.5rem white;
}

.fa-shopping-cart {
  color: white;
  cursor: pointer;
}

.product-info {
  margin-bottom: 16px;
  margin-right: 16px;
}

.product-info h2 {
  font-size: 24px;
  margin-bottom: 8px;
}

.product-info p {
  font-size: 16px;
  margin-bottom: 8px;
}

.product-info .price {
  font-size: 24px;
  font-weight: bold;
}

.product-options {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 16px;
}

.product-options .option {
  margin-bottom: 16px;
}

.product-options label {
  font-size: 16px;
  margin-bottom: 8px;
}

.product-options select {
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 200px;
}

.product-options input[type="checkbox"] {
  margin-left: 8px;
  font-size: 16px;
}

.product-options .quantity-controls {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.product-options .quantity-controls button {
  font-size: 20px;
  font-weight: bold;
  padding: 8px;
  border-radius: px;
  background-color: var(--steel-blue-clr);
  cursor: pointer;
}

.product-options .quantity-controls span {
  font-size: 24px;
  font-weight: bold;
  margin: 0 16px;
}

.product-options button {
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

.product-options button:hover {
  background-color: #2e8b57;
}

.cart-message {
  margin-top: 16px;
  padding: 16px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 8px;
}

#seated-together {
  vertical-align: top;
  margin-top: 7px;
}

.order-text {
  color: var(--verify-green);
  text-align: center;
}

.check-mark {
  font-size: 40px;
}

/* Paymenform styling-------------------------------------------------- */
.paymentform-container {
  border-radius: 15px;
  margin: 60px;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border-radius: 15px;
  background-color: var(--steel-blue-clr);
}

input[type="text"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
  border-radius: 15px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn1 {
  background-color: #04aa6d;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn1:hover {
  background-color: #45a049;
}

a {
  color: #2196f3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
  .paymentform-container {
    margin: 0px;
  }

  .cart-div {
    width: 100%;
  }

  .product-card {
    width: 100%;
  }

  .order-confirmation {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .heading-container {
    justify-content: flex-start;
  }
  h1 {
    font-size: 24px;

    width: 250px;
  }
}

@media (max-width: 350px) {
  .heading-container {
    justify-content: flex-start;
  }
  h1 {
    font-size: 24px;

    width: 200px;
  }
}
</style>
