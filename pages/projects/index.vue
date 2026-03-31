<template>
  <section class="all-projects">
    <div class="projects-bg"></div>

    <div class="projects-content">
      <div class="projects-hero">
        <span class="section-badge">Portfolio</span>
        <h1>Mes projets</h1>
        <p class="projects-intro">
          Découvrez une sélection de projets sur lesquels j’ai travaillé.
          Chacun reflète ma façon de concevoir des interfaces modernes,
          développer des fonctionnalités utiles et créer des expériences web
          propres, fluides et efficaces.
        </p>
      </div>

      <div class="projects-container">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
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
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding: 100px 20px 80px;
  background: linear-gradient(180deg, #f8fbfa 0%, #eef6f2 100%);
}

.projects-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top left, rgba(32, 91, 67, 0.12), transparent 30%),
    radial-gradient(circle at bottom right, rgba(0, 129, 167, 0.1), transparent 30%);
  pointer-events: none;
}

.projects-content {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
}

.projects-hero {
  text-align: center;
  max-width: 850px;
  margin: 0 auto 60px;
}

.section-badge {
  display: inline-block;
  margin-bottom: 18px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(32, 91, 67, 0.1);
  color: #205b43;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.projects-hero h1 {
  margin: 0 0 18px;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 1;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.projects-intro {
  margin: 0 auto;
  max-width: 760px;
  font-size: 1.12rem;
  line-height: 1.8;
  color: #5f6d78;
}

/* GRILLE PROJETS */
.projects-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  align-items: stretch;
}

/* Empêche les cartes de prendre des largeurs bizarres si ancien style encore présent */
.projects-container :deep(.project-card-container) {
  width: 100%;
  margin: 0;
}

@media (max-width: 1100px) {
  .projects-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .all-projects {
    padding: 90px 16px 60px;
  }

  .projects-hero {
    margin-bottom: 40px;
  }

  .projects-container {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .projects-intro {
    font-size: 1.02rem;
  }
}
</style>