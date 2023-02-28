<template>
  <div>
    <h1>Product Page</h1>
    <ProductPage :product="product" />
  </div>
</template>

<script>
import ProductPage from "../components/ProductPage.vue";

export default {
  components: {
    ProductPage,
  },
  data() {
    return {
      product: {
        name: "Product Name",
        description: "Product Description",
        price: "$10.00",
        image: "src/assets/PlanetPictures/Moon.jpeg",
        options: [
          { id: 1, name: "Option 1", price: "$10.00" },
          { id: 2, name: "Option 2", price: "$15.00" },
          { id: 3, name: "Option 3", price: "$20.00" },
        ],
      },
    };
  },
};
</script>
