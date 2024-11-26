<template>
  <div class="project-card-container" @click="goToProjectDetail">
    <h3 class="project-title">{{ project.title }}</h3>
    <NuxtLink :to="`/projects/${project.id}`" class="project-card">
      <img :src="project.image" alt="Project Image" class="project-image" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  methods: {
    goToProjectDetail() {
      // Rediriger vers la page du projet en utilisant l'ID
      this.$router.push(`/projects/${this.project.id}`);
    },
  },
};
</script>

<style scoped>
.project-card-container {
  width: 30%;
  margin: 20px;
  text-align: center;
  box-sizing: border-box;
}

.project-title {
  font-size: 2rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.project-card {
  position: relative;
  width: 100%;
  height: 350px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 15px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.project-card:hover .overlay {
  opacity: 1;
}

.project-card:hover .project-description {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover .project-image {
  transform: scale(1.05);
}
</style>
