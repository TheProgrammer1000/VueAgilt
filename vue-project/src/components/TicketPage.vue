<template>
  <div class="container">
    <div class="product-card">
      <h1>Buy your tickets here</h1>
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
          <label for="seated-together">Seated together</label>
          <input
            type="checkbox"
            id="seated-together"
            v-model="seatedTogether"
          />
        </div>
        <div class="option">
          <label for="quantity">Quantity</label>
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
      <p>Total price: ${{ totalPrice }}</p>
    </div>
    <div class="cart-div">
      <h2>Cart</h2>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} x{{ item.quantity }} - ${{ item.price }}
        </li>
      </ul>
      <p id="cart-total">Total Price: ${{ cartTotal }}</p>
      <button class="pay-button" @click="pay()">Pay ${{ cartTotal }}</button>
    </div>
    <div class="order-confirmation">
      <h2>Order Confirmation<br><br></h2>
      <p class="confirmation-message" v-if="showConfirmationMessage"><p class="check-mark">✅</p>Your order has been placed. <br>Thank you for your order!</p>
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
      selectedOption: 0,
      quantity: 1,
      cartItems: [],
      showConfirmationMessage: false, // add showConfirmationMessage property
    };
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    totalPrice() {
      return this.selectedOption * this.quantity;
    },
  },
  methods: {
    addToCart() {
      const selectedOption = this.product.options.find(
        (option) => option.price === this.selectedOption
      );
      const product = {
        name: selectedOption.name,
        price: this.totalPrice,
        seatedTogether: this.seatedTogether,
        quantity: this.quantity,
      };
      this.cartItems.push(product);
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
      this.showConfirmationMessage = true; // set showConfirmationMessage to true
      this.cartButton = false;
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
    //increase quantity on item in li list and updates the new price
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
      this.cartItems[index].price +=
        this.cartItems[index].price / (this.cartItems[index].quantity - 1);
    },
    //decreases quantity on item in li list and updates the new price
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
        this.cartItems[index].price -=
          this.cartItems[index].price / (this.cartItems[index].quantity + 1);
      } else {
        this.cartItems.splice(index, 1);
      }
    },
    showPaymentFormMethod() {
      this.showPaymentForm = true;
      this.checkoutButton = false;
    },
    showCart() {
      this.cartButton = true;
      this.$nextTick(() => {
        this.$refs.cartDiv.scrollIntoView({ behavior: "smooth" });
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 50px;
  margin: 0 auto;
  padding-top: 40px;
}

.cart-div {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 410px;
  height: 519px;
  box-shadow: 0 0 2rem -0.5rem white;
  padding: 15px;
  margin: 60px 10px 40px 10px;
}

.order-confirmation {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 410px;
  height: 518px;
  box-shadow: 0 0 2rem -0.5rem white;
  padding: 15px;
  margin: 70px 10px 40px 10px;
  text-align: center;
}

ul {
  padding: 0;
  margin: 0;
  color: white;
}

li {
  list-style: none;
}

h2 {
  color: white;
}
p {
  color: rgb(202, 199, 199);
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
  margin: 20px;
  background-color: #4caf50;
  color: white;
}

.product-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px;
  margin: 60px 10px 40px 10px;
  color: white;
  box-shadow: 0 0 2rem -0.5rem white;
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
  font-size: 24px;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
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

.confirmation-message {
  color: var(--verify-green);
  text-align: center;
}

.check-mark {
  font-size: 40px;
}

/* Payment form styling */
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