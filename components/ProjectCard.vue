<template>
  <NuxtLink
    :to="`/projects/${project.id}`"
    class="project-card"
  >
    <div class="image-wrapper">
      <img :src="project.image" alt="Project Image" class="project-image" />

      <div class="overlay">
        <div class="overlay-content">
          <span class="project-tag">Projet</span>

          <h3>{{ project.title }}</h3>

          <p class="project-description">
            {{ project.description || "Voir le projet en détail" }}
          </p>

          <span class="project-link">Voir le projet →</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style scoped>
.project-card {
  display: block;
  border-radius: 24px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.35s ease;
}

.project-card:hover {
  transform: translateY(-8px);
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 360px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(25, 50, 40, 0.12);
}

/* IMAGE */
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.08);
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15, 30, 25, 0.95) 0%,
    rgba(15, 30, 25, 0.85) 40%,
    rgba(15, 30, 25, 0.4) 70%,
    transparent 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .overlay {
  opacity: 1;
}

/* CONTENU */
.overlay-content {
  color: white;
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;

  background: rgba(0, 0, 0, 0.5);
  padding: 16px;
  border-radius: 16px;
}

.project-card:hover .overlay-content {
  transform: translateY(0);
  opacity: 1;
}

/* TAG */
.project-tag {
  display: inline-block;
  margin-bottom: 8px;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  font-size: 0.75rem;
  font-weight: 600;
}

/* TITRE */
.overlay-content h3 {
  margin: 0;
  font-size: 1.8rem;
  font-family: "Formula Condensed", sans-serif;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
}

/* PETITE LIGNE STYLE */
.overlay-content h3::after {
  content: "";
  display: block;
  width: 40px;
  height: 3px;
  margin-top: 6px;
  background: #00afb9;
  border-radius: 2px;
}

/* DESCRIPTION */
.project-description {
  margin: 10px 0;
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.5;
}

/* LIEN */
.project-link {
  font-weight: 600;
  font-size: 0.95rem;
  color: #00afb9;
}
</style>