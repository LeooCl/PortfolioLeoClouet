<template>
  <section v-if="project" class="project-detail-page">
    <div class="project-detail-bg"></div>

    <div class="project-detail">
      <div class="project-hero">
        <span class="section-badge">Projet</span>
        <h1 class="project-title">{{ project.title }}</h1>
        <p class="project-intro">
          Découvrez les détails du projet, les technologies utilisées, les
          compétences mobilisées ainsi que le contexte et les choix réalisés
          pendant son développement.
        </p>
      </div>

      <div class="project-image-card">
        <div class="project-image-container">
          <img :src="project.image" :alt="project.title" class="project-image" />
        </div>
      </div>

      <div class="project-info">
        <div class="project-tech-skills">
          <div class="info-card">
            <h3>Technologies utilisées</h3>
            <div class="tags-list">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="info-card">
            <h3>Compétences mises en avant</h3>
            <div class="tags-list">
              <span
                v-for="skill in project.skills"
                :key="skill"
                class="tag secondary"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <div class="content-grid">
          <div class="content-card">
            <h3>Contexte</h3>
            <p>{{ project.context }}</p>
          </div>

          <div class="content-card">
            <h3>Réalisation</h3>
            <p>{{ project.realization }}</p>
          </div>
        </div>
      </div>

      <div class="project-links">
        <AppButton :to="project.githubLink" label="Voir sur GitHub" />
      </div>
    </div>
  </section>

  <section v-else class="not-found-page">
    <div class="not-found-card">
      <h2>Projet non trouvé</h2>
      <p>Le projet que vous recherchez n’existe pas ou n’est plus disponible.</p>
    </div>
  </section>
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
.project-detail-page {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding: 100px 20px 80px;
  background: linear-gradient(180deg, #f8fbfa 0%, #eef6f2 100%);
}

.project-detail-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top left, rgba(32, 91, 67, 0.12), transparent 30%),
    radial-gradient(circle at bottom right, rgba(0, 129, 167, 0.1), transparent 30%);
  pointer-events: none;
}

.project-detail {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.project-hero {
  text-align: center;
  max-width: 850px;
  margin: 0 auto 50px;
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

.project-title {
  margin: 0 0 18px;
  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 0.95;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.project-intro {
  margin: 0 auto;
  max-width: 760px;
  font-size: 1.12rem;
  line-height: 1.8;
  color: #5f6d78;
}

.project-image-card {
  padding: 16px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 20px 60px rgba(25, 50, 40, 0.08);
  border: 1px solid rgba(32, 91, 67, 0.08);
  margin-bottom: 36px;
}

.project-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 24px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* blocs principaux */
.project-info {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.project-tech-skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.info-card,
.content-card {
  padding: 28px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(32, 91, 67, 0.08);
  box-shadow: 0 12px 32px rgba(25, 50, 40, 0.06);
}

.info-card h3,
.content-card h3 {
  margin: 0 0 18px;
  font-size: 2rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(32, 91, 67, 0.1);
  color: #205b43;
  font-size: 0.95rem;
  font-weight: 600;
}

.tag.secondary {
  background: rgba(0, 129, 167, 0.1);
  color: #006b88;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.content-card p {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.9;
  color: #61707b;
}

.project-links {
  margin-top: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
}

/* not found */
.not-found-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: linear-gradient(180deg, #f8fbfa 0%, #eef6f2 100%);
}

.not-found-card {
  max-width: 500px;
  padding: 36px;
  text-align: center;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(32, 91, 67, 0.08);
  box-shadow: 0 12px 32px rgba(25, 50, 40, 0.06);
}

.not-found-card h2 {
  margin: 0 0 12px;
  font-size: 2.5rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.not-found-card p {
  margin: 0;
  color: #667580;
  line-height: 1.7;
}

/* responsive */
@media (max-width: 992px) {
  .project-tech-skills,
  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .project-detail-page {
    padding: 90px 16px 60px;
  }

  .project-image-card {
    padding: 10px;
    border-radius: 22px;
  }

  .project-image-container {
    border-radius: 18px;
  }

  .info-card,
  .content-card {
    padding: 22px;
  }

  .info-card h3,
  .content-card h3 {
    font-size: 1.7rem;
  }

  .project-intro {
    font-size: 1.02rem;
  }
}
</style>