<template>
  <header>
    <nav
      class="navbar"
      :class="{
        fixed: isFixed,
        scrolled: hasScrolled,
        'home-navbar': isHome,
        'home-navbar-initial': isHome && !isFixed && !isMobile,
      }"
    >
      <div class="navbar-inner">
        <div class="nav-side nav-left">
          <NuxtLink to="/" class="nav-link">Accueil</NuxtLink>
          <NuxtLink to="/about" class="nav-link">À propos</NuxtLink>
        </div>

        <NuxtLink to="/" class="logo">
          <img src="/LogoCL.png" alt="Logo CL" />
        </NuxtLink>

        <div class="nav-side nav-right">
          <NuxtLink to="/projects" class="nav-link">Projets</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        </div>

        <button
          class="menu-toggle"
          @click="toggleMenu"
          aria-label="Ouvrir le menu"
          v-if="isMobile"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>

      <div class="mobile-menu" :class="{ active: isMenuOpen }" v-if="isMobile">
        <NuxtLink to="/" class="mobile-link" @click="closeMenu"
          >Accueil</NuxtLink
        >
        <NuxtLink to="/about" class="mobile-link" @click="closeMenu"
          >À propos</NuxtLink
        >
        <NuxtLink to="/projects" class="mobile-link" @click="closeMenu"
          >Projets</NuxtLink
        >
        <NuxtLink to="/contact" class="mobile-link" @click="closeMenu"
          >Contact</NuxtLink
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
} from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isMenuOpen = ref(false);
const isMobile = ref(false);
const isFixed = ref(true);
const hasScrolled = ref(false);

const NAVBAR_HEIGHT = 90;

const isHome = computed(() => route.path === "/");

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 900;
};

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 20;

  if (isMobile.value) {
    isFixed.value = true;
    return;
  }

  if (!isHome.value) {
    isFixed.value = true;
    return;
  }

  const heroSection = document.querySelector(".home-container");

  if (!heroSection) {
    isFixed.value = true;
    return;
  }

  const triggerPoint = heroSection.offsetHeight - NAVBAR_HEIGHT;
  isFixed.value = window.scrollY >= triggerPoint;
};

const initNavbar = async () => {
  await nextTick();
  checkMobile();
  handleScroll();
};

onMounted(() => {
  initNavbar();
  window.addEventListener("resize", checkMobile);
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
  window.removeEventListener("scroll", handleScroll);
});

watch(
  () => route.path,
  async () => {
    closeMenu();
    await initNavbar();
  },
);
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* NAVBAR PRINCIPALE */
.navbar {
  font-family: "Space Mono", monospace;
  width: 100%;
  height: 90px;
  z-index: 1000;
  background: #f2f2f2;
  box-shadow:
    0 -6px 10px rgba(0, 0, 0, 0.08),
    0 6px 10px rgba(0, 0, 0, 0.08);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
  overflow: visible;
}

/* FIXED */
.navbar.fixed {
  position: fixed;
  top: 0;
  left: 0;
}

/* POSITION HOME (bas du hero) */
.home-navbar.home-navbar-initial {
  position: absolute;
  top: calc(100vh - 90px);
  left: 0;
}

/* OMBRE AU SCROLL */
.navbar.scrolled {
  box-shadow:
    0 -8px 14px rgba(0, 0, 0, 0.1),
    0 8px 14px rgba(0, 0, 0, 0.12);
}

/* STRUCTURE */
.navbar-inner {
  display: grid;
  grid-template-columns: 1fr 140px 1fr;
  align-items: center;
  height: 100%;
  position: relative;
}

/* CÔTÉS */
.nav-side {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.nav-left {
  justify-content: flex-start;
}

.nav-right {
  justify-content: flex-end;
}

/* LIENS */
.nav-link {
  flex: 1;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: #111;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1;
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
}

.nav-link:hover {
  background: #7da097;
  color: white;
}

/* LOGO */
.logo {
  height: 100%;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.logo:hover {
  background: transparent;
}

.logo img {
  display: block;
  max-width: 150px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 0 5px rgba(1, 90, 20, 0.3));
}

.logo img:hover {
  transform: scale(1.05);
}

/* BURGER */
.menu-toggle {
  display: none;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px;
  z-index: 1101;
}

.bar {
  display: block;
  width: 26px;
  height: 3px;
  margin: 5px 0;
  background: #111;
}

/* MENU MOBILE */
.mobile-menu {
  display: none;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .navbar {
    position: fixed !important;
    top: 0;
    left: 0;
    height: 80px;
    overflow: visible;
  }

  .navbar-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 80px;
  }

  .nav-side {
    display: none;
  }

  .logo {
    height: 100%;
    width: auto;
  }

  .logo img {
    max-width: 100px;
  }

  .menu-toggle {
    display: block;
  }

  .mobile-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: #f2f2f2;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08);
    z-index: 1100;
  }

  .mobile-menu.active {
    display: flex;
  }

  .mobile-link {
    min-height: 60px;
    padding: 18px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #111;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    transition:
      background-color 0.25s ease,
      color 0.25s ease;
  }

  .mobile-link:hover {
    background: #7da097;
    color: white;
  }
}
</style>
