<template>
  <main>
    <NavBar />
    <TicketPage :product="product" />
  </main>
</template>

<script>
import TicketPage from "../components/TicketPage.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    TicketPage,
    NavBar,
  },
  data() {
    return {
      product: {
        description: "Make a choice of tickets for your journey",
        options: [
          {
            id: 1,
            name: "Mars",
            package: "Astronaut:",
            price: "5000",
            currency: "$",
          },
          {
            id: 2,
            name: "Moon",
            package: "Astronaut:",
            price: "10000",
            currency: "$",
          },
          {
            id: 3,
            name: "Kepler-22b",
            package: "Astronaut:",
            price: "15000",
            currency: "$",
          },
          { id: 4, space: "---------------" },
          {
            id: 6,
            name: "Mars",
            package: "Astronaut Premium+:",
            price: "25000",
            currency: "$",
          },
          {
            id: 7,
            name: "Moon",
            package: "Astronaut Premium+:",
            price: "30000",
            currency: "$",
          },
          {
            id: 5,
            name: "Kepler-22b",
            package: "Astronaut Premium+:",
            price: "20000",
            currency: "$",
          },
          { id: 8, space: "---------------" },
          {
            id: 9,
            name: "Mars",
            package: "Prime VIP:",
            price: "35000",
            currency: "$",
          },
          {
            id: 10,
            name: "Moon",
            package: "Prime VIP:",
            price: "40000",
            currency: "$",
          },
          {
            id: 11,
            name: "Kepler-22b",
            package: "Prime VIP:",
            price: "45000",
            currency: "$",
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
main {
  margin: 0;
  padding: 0;
}
  background-color: var(--dark-blue);
}
</style>
