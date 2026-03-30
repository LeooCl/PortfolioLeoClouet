<template>
  <NuxtLink :to="to" class="btn btn-learn-more">
    <span>{{ label }}</span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.btn {
  min-width: 130px;
  height: 40px;
  padding: 0 25px;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  box-shadow:
    inset 2px 2px 2px 0 rgba(255, 255, 255, 0.5),
    7px 7px 20px 0 rgba(0, 0, 0, 0.1),
    4px 4px 5px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: background 0.3s ease, color 0.3s ease;
}

.btn-learn-more {
  background-color: #f0ecfc;
  background-image: linear-gradient(330deg, #7da097 0%, #a5dfc8 85%);
}

.btn-learn-more span {
  position: relative;
  z-index: 2;
}

/* base des bordures */
.btn-learn-more::before,
.btn-learn-more::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 5px;
  pointer-events: none;
}

/* HAUT + BAS (animation horizontale) */
.btn-learn-more::before {
  border-top: 2px solid #205b43;
  border-bottom: 2px solid #205b43;
  transform: scaleX(0);
  transform-origin: left; /* démarre à gauche */
  transition: transform 0.3s ease;
}

/* GAUCHE + DROITE (animation verticale) */
.btn-learn-more::after {
  border-left: 2px solid #205b43;
  border-right: 2px solid #205b43;
  transform: scaleY(0);
  transform-origin: top; /* démarre en haut */
  transition: transform 0.3s ease;
}

.btn-learn-more:hover {
  background: transparent;
  color: #205b43;
}

/* animation */
.btn-learn-more:hover::before {
  transform: scaleX(1);
}

.btn-learn-more:hover::after {
  transform: scaleY(1);
}
</style>