<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <div class="price-and-options">
        <div class="price">{{ formatPrice(product.price) }}</div>
        <div class="options">
          <select v-model="selectedOption" @change="updatePrice">
            <option value="space">Space</option>
            <option value="spaceplus">Space+</option>
            <option value="lightspeed">Lightspeed</option>
          </select>
          <div class="quantity">
            <label>Quantity:</label>
            <button @click="decrement">-</button>
            <span>{{ quantity }}</span>
            <button @click="increment">+</button>
          </div>
        </div>
      </div>
      <div class="checkbox">
        <input type="checkbox" v-model="seatedTogether" />
        <label>Seated together</label>
      </div>
      <button class="add-to-cart" @click="addToCart">Add to Cart</button>
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
      selectedOption: "space",
      quantity: 1,
      seatedTogether: false,
    };
  },
  methods: {
    formatPrice(price) {
      // Function to format price as desired
      // For example: return `$${price.toFixed(2)}`
    },
    updatePrice() {
      // Function to update price based on selectedOption
      // For example: if (this.selectedOption === 'space') this.product.price = 10
    },
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 1) this.quantity--;
    },
    addToCart() {
      const product = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        quantity: this.quantity,
        seatedTogether: this.seatedTogether,
      };
      this.$emit("add-to-cart", product);
    },
  },
  created() {
    console.log("product: ", this.product.image);
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 100%;
}

.product-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-right: 16px;
}

.product-details {
  flex: 1;
}

.product-details h2 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.product-details p {
  margin: 8px 0;
  font-size: 16px;
  color: #666;
}

.price-and-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
}

.price {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.options select {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  border: none;
  background-color: #f5f5f5;
  padding: 8px;
  border-radius: 4px;
  margin-right: 8px;
}

.quantity {
  display: flex;
  align-items: center;
}

.quantity label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-right: 8px;
}

.quantity button {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  padding: 8px;
  margin: 0 4px;
}

.checkbox {
  display: flex;
  align-items: center;
  margin: 16px 0;
}

.checkbox input[type="checkbox"] {
  margin-right: 8px;
}

.checkbox label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.add-to-cart {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.add-to-cart:hover {
  background-color: #555;
}
</style>
