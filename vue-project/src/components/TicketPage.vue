<template>
  <div class="product-card">
    <div class="product-info">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p class="price">{{ product.price }}</p>
    </div>
    <div class="product-options">
      <div class="option">
        <label for="space">Space class</label>
        <select id="space" v-model="selectedOption">
          <option
            v-for="option in product.options"
            :key="option.id"
            :value="option.price"
          >
            {{ option.name }} $10000
          </option>
        </select>
      </div>
      <div class="option">
        <label for="space-plus">Space+ class</label>
        <select id="space-plus" v-model="selectedOption">
          <option
            v-for="option in product.options"
            :key="option.id"
            :value="option.price + 10"
          >
            {{ option.name }} $20000
          </option>
        </select>
      </div>
      <div class="option">
        <label for="lightspeed">Lightspeed class</label>
        <select id="lightspeed" v-model="selectedOption">
          <option
            v-for="option in product.options"
            :key="option.id"
            :value="option.price + 20"
          >
            {{ option.name }} $30000
          </option>
        </select>
      </div>
      <div class="option">
        <label for="seated-together">Seated together</label>
        <input type="checkbox" id="seated-together" v-model="seatedTogether" />
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
      seatedTogether: false,
      quantity: 1,
    };
  },
  methods: {
    addToCart() {
      const product = {
        name: this.product.name,
        price: this.selectedOption,
        seatedTogether: this.seatedTogether,
        quantity: this.quantity,
      };
      // emit an event to the parent component to add the product to the cart
      this.$emit("add-to-cart", product);
    },
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
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
</style>
