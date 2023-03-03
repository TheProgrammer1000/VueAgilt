<template>
  <div>
    <h1>Tickets for Space</h1>
    <TicketPage :product="product" />
  </div>
</template>

<script>
import TicketPage from "../components/TicketPage.vue";

export default {
  components: {
    TicketPage,
  },
  data() {
    return {
      product: {
        name: "Tickets",
        description: "Make a choice of tickets for your journey",
        options: [
          { id: 1, name: "Mars", price: "$10.00" },
          { id: 2, name: "Moon", price: "$15.00" },
          { id: 3, name: "Kepler", price: "$20.00" },
        ],
      },
    };
  },
};
</script>
