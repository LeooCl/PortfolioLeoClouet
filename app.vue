<template>
  <div>
    <Navbar />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    },
  ],
});
</script>

<style>
/* Style global */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fefdfb;
}

h1,
h2,
h3 {
  color: #333;
}
</style>
