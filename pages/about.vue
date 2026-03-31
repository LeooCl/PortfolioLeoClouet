<template>
  <section class="about">
    <div class="about-bg"></div>

    <div class="about-content">
      <div class="hero-card">
        <div class="hero-text">
          <span class="section-badge">À propos</span>
          <h1>Développeur web passionné, créatif et orienté solutions</h1>
          <p class="intro">
            Je m'appelle Léo, développeur web passionné par la création
            d'expériences numériques modernes, performantes et intuitives.
            J’aime concevoir des interfaces soignées, développer des
            fonctionnalités robustes, et relever de nouveaux défis techniques.
          </p>

          <div class="hero-actions">
            <AppButton to="/contact" label="Me contacter" />
            <a
              href="/CV-Clouet-Leo.pdf"
              class="cv-button"
              download="CV-Clouet-Leo.pdf"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div class="hero-image-wrapper">
          <div class="image-ring">
            <img
              src="~/public/images/avatarLeo.png"
              alt="Avatar de Léo"
              class="profile-image"
            />
          </div>
        </div>
      </div>

      <div class="info-grid">
        <div class="info-card about-card">
          <h2>Qui suis-je ?</h2>
          <p>
            Je développe aussi bien le front-end que le back-end, avec une
            attention particulière portée à l’ergonomie, à la clarté du code
            et à la qualité de l’expérience utilisateur. Je cherche toujours à
            apprendre, expérimenter et faire évoluer mes compétences.
          </p>
        </div>

        <div class="info-card contact-card">
          <h2>Travaillons ensemble</h2>
          <p>
            Tu as un projet, une idée ou une opportunité à proposer ? Je serai
            ravi d’en discuter avec toi.
          </p>
          <AppButton to="/contact" label="Contactez-moi" />
        </div>
      </div>

      <div class="skills-section">
        <div class="section-title">
          <span>L’essentiel</span>
          <h2>Mes compétences</h2>
        </div>

        <div class="skills-grid">
          <div class="skill-card">
            <h3>Front-end</h3>
            <p>HTML, CSS, JavaScript</p>
          </div>

          <div class="skill-card">
            <h3>Frameworks</h3>
            <p>Vue.js, Nuxt.js, React</p>
          </div>

          <div class="skill-card">
            <h3>Back-end</h3>
            <p>Node.js, Express</p>
          </div>

          <div class="skill-card">
            <h3>Base de données</h3>
            <p>MongoDB, SQL</p>
          </div>

          <div class="skill-card">
            <h3>Versioning</h3>
            <p>Git, GitHub</p>
          </div>

          <div class="skill-card">
            <h3>Approche</h3>
            <p>UI soignée, performance, accessibilité</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  position: relative;
  overflow: hidden;
  padding: 80px 20px;
  background:
    linear-gradient(180deg, #f8fbfa 0%, #eef6f2 100%);
  color: #44515c;
}

.about-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top left, rgba(32, 91, 67, 0.12), transparent 30%),
    radial-gradient(circle at bottom right, rgba(0, 129, 167, 0.1), transparent 30%);
  pointer-events: none;
}

.about-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-card {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 40px;
  align-items: center;
  padding: 50px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px rgba(25, 50, 40, 0.08);
  border: 1px solid rgba(32, 91, 67, 0.08);
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

.hero-text h1 {
  margin: 0 0 20px;
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  line-height: 1;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.intro {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #5e6c77;
  max-width: 700px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
}

.cv-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 24px;
  border-radius: 14px;
  background: #205b43;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.cv-button:hover {
  background: transparent;
  color: #205b43;
  border-color: #205b43;
  transform: translateY(-2px);
}

.hero-image-wrapper {
  display: flex;
  justify-content: center;
}

.image-ring {
  position: relative;
  padding: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #205b43, #00afb9);
  box-shadow: 0 15px 40px rgba(32, 91, 67, 0.2);
}

.profile-image {
  display: block;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid #ffffff;
  background: #ffffff;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 32px;
}

.info-card {
  padding: 30px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 12px 35px rgba(25, 50, 40, 0.06);
  border: 1px solid rgba(32, 91, 67, 0.08);
}

.info-card h2 {
  margin: 0 0 14px;
  font-size: 2rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.info-card p {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #61707b;
}

.contact-card {
  background: linear-gradient(135deg, #205b43 0%, #2f7a5a 100%);
}

.contact-card h2,
.contact-card p {
  color: #ffffff;
}

.contact-card :deep(a),
.contact-card :deep(button) {
  margin-top: 20px;
}

.skills-section {
  margin-top: 70px;
}

.section-title {
  margin-bottom: 28px;
  text-align: center;
}

.section-title span {
  display: inline-block;
  margin-bottom: 10px;
  color: #00afb9;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.section-title h2 {
  margin: 0;
  font-size: 3.2rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.skill-card {
  padding: 24px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(32, 91, 67, 0.08);
  box-shadow: 0 10px 30px rgba(25, 50, 40, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 35px rgba(25, 50, 40, 0.1);
}

.skill-card h3 {
  margin: 0 0 10px;
  font-size: 1.6rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.skill-card p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: #667580;
}

@media (max-width: 992px) {
  .hero-card {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 36px 24px;
  }

  .hero-actions {
    justify-content: center;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .profile-image {
    width: 220px;
    height: 220px;
  }
}

@media (max-width: 640px) {
  .about {
    padding: 60px 16px;
  }

  .hero-text h1 {
    font-size: 3rem;
  }

  .section-title h2 {
    font-size: 2.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .profile-image {
    width: 180px;
    height: 180px;
  }

  .info-card,
  .skill-card {
    padding: 22px;
  }
}
</style>