<template>
  <section class="all-projects">
    <h1>Mes Projets</h1>
    <div class="projects-container">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style scoped>
.all-projects {
  padding: 4rem 2rem;
  text-align: center;
}

.all-projects h1 {
  font-size: 4rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 40px;
}

@media (max-width: 992px) {
  .projects-container {
    flex-wrap: wrap;
    gap: 3rem;
  }
  .project-card-container {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>