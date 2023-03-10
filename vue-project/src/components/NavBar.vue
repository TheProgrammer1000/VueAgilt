<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <!-- Bootstrap Navbar -->
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Prime Travels</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            Prime Travels
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/landing">Home</RouterLink>
              <RouterLink class="nav-link" to="/about">About</RouterLink>
              <RouterLink class="nav-link" to="/ticketpage">Tickets</RouterLink>
            </li>

            <!-- Boostrap Navbar test start -->
            <!-- Planet Navbar hamburger dropdown -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Planets
              </a>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink class="nav-link" to="/marspage"
                    >• Mars</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="nav-link" to="/moonpage"
                    >• Moon</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="nav-link" to="/keplerpage"
                    >• Kepler-22b</RouterLink
                  >
                </li>
                <li></li>
              </ul>
            </li>
            <!-- Bootstrap Navbar test end -->
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
.dropdown-menu {
  background-color: var(--dark-blue);
  border-color: transparent;
  margin-left: 20px;
}
.nav-item {
  color: white;
}

.nav-link {
  color: white !important;
}

.nav-link:hover {
  color: var(--light-blue-clr) !important;
}

nav {
  background-color: transparent;
}

.navbar {
  --bs-navbar-toggler-focus-width: 0rem;
}

.navbar-toggler {
  background-color: white;
}

.offcanvas-title {
  color: white;
}

.navbar-brand {
  color: white;
}

.offcanvas-body {
  background-color: var(--dark-blue);
}

.offcanvas-header {
  background-color: var(--dark-blue);
}

.btn-close {
  background-color: white;
}

.container-fluid {
  margin-top: 3.5rem;
  position: fixed;
  width: 99.5%;
}
</style>
