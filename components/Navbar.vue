<template>
  <header>
    <nav class="navbar" :class="{ scrolled: hasScrolled }">
      <div class="navbar-container">
        <div class="menu-toggle" @click="toggleMenu" v-if="isMobile">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <NuxtLink to="/" class="logo">CL</NuxtLink>
        <ul class="nav-links" :class="{ active: isMenuOpen }">
          <li><NuxtLink to="/" class="nav-item">Accueil</NuxtLink></li>
          <li><NuxtLink to="/about" class="nav-item">À propos</NuxtLink></li>
          <li><NuxtLink to="/projects" class="nav-item">Projets</NuxtLink></li>
          <li><NuxtLink to="/contact" class="nav-item">Contact</NuxtLink></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isMenuOpen = ref(false);
const isMobile = ref(false);
const hasScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: background-color 0.3s ease;
  z-index: 1000;
  padding: 10px 20px;
}

.navbar.scrolled {
  background-color: rgba(0, 0, 0, 1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
}

.logo {
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 2px;
  transition: color 0.3s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.menu-toggle {
  display: none;
  cursor: pointer;
  z-index: 2000;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: #fff;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links.active {
  display: flex;
}

.nav-item {
  margin-left: 20px;
  font-size: 1.1rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-item:hover {
  color: #a5dfc8;
  transform: translateY(-3px);
}

@media screen and (max-width: 768px) {
  .navbar-container {
    justify-content: space-between;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }

  .menu-toggle {
    display: block;
    position: relative;
    margin-left: 10px;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 10px 0;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-item {
    margin: 10px 0;
    text-align: center;
  }
}
</style>