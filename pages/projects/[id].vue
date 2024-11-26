<template>
  <div v-if="project" class="project-detail">
    <h1 class="project-title">{{ project.title }}</h1>
    <div class="project-image-container">
      <img :src="project.image" alt="project.title" class="project-image" />
    </div>
    <div class="project-info">
      <!-- Technologies -->
      <div class="project-technologies">
        <h3>Technologies utilisées :</h3>
        <ul>
          <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
        </ul>
      </div>

      <!-- Contexte -->
      <div class="project-context">
        <h3>Contexte :</h3>
        <p>{{ project.context }}</p>
      </div>

      <!-- Réalisation -->
      <div class="project-realization">
        <h3>Réalisation :</h3>
        <p>{{ project.realization }}</p>
      </div>

      <!-- Lien GitHub -->
      <div class="project-links">
        <a :href="project.githubLink" target="_blank" class="github-btn"
          >Voir le code source</a
        >
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <p>Projet non trouvé.</p>
  </div>
</template>

<script>
import projects from "@/data/projects";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      project: null,
    };
  },
  mounted() {
    const route = useRoute();
    const projectId = Number(route.params.id);

    this.project = projects.find((p) => p.id === projectId);
  },
};
</script>

<style scoped>
.project-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-title {
  font-size: 5em;
  font-family: "Formula Condensed", sans-serif;
  text-align: center;
  color: #205b43;
  margin-bottom: 1rem;
}

.project-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-technologies,
.project-context,
.project-realization {
  margin-bottom: 1rem;
}

.project-technologies h3,
.project-context h3,
.project-realization h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #222;
}

.project-technologies ul {
  list-style-type: disc;
  margin-left: 20px;
  color: #555;
}

.project-technologies ul li,
.project-context p,
.project-realization p {
  font-size: 1.1rem;
  color: #666;
}

.project-links {
  text-align: center;
  margin-top: 2rem;
}

.github-btn {
  background-color: #333;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.github-btn:hover {
  background-color: #444;
}

.not-found {
  text-align: center;
  font-size: 1.5rem;
  color: #888;
  margin-top: 3rem;
}
</style>