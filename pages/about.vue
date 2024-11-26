<template>
  <section class="about">
    <div class="about-content">
      <div class="profile-section">
        <img
          src="~/public/images/photo-de-profil.jpg"
          alt="Profile Picture"
          class="profile-image"
        />
        <h1>À propos de moi</h1>
      </div>

      <p>
        Je m'appelle Léo, un développeur web passionné par la création de
        solutions numériques. J'ai une solide expérience dans le développement
        front-end et back-end, et je suis toujours à la recherche de nouveaux
        défis.
      </p>

      <div class="skills">
        <h3>Compétences</h3>
        <ul>
          <li>Développement Front-end (HTML, CSS, JavaScript)</li>
          <li>Frameworks: Vue.js, Nuxt.js, React</li>
          <li>Développement Back-end (Node.js, Express)</li>
          <li>Gestion de base de données (MongoDB, SQL)</li>
          <li>Version Control: Git, GitHub</li>
        </ul>
      </div>

      <div class="contact">
        <h3>Contact</h3>
        <p>Si vous avez des questions, n'hésitez pas à me contacter !</p>
        <NuxtLink to="/contact" class="button">Contactez-moi</NuxtLink>
      </div>

      <div class="download-cv">
        <a href="/CV-Clouet-Leo.pdf" class="button" download="CV-Clouet-Leo.pdf">
  Télécharger mon CV
</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 40px;
  margin-top: 40px;
  text-align: center;
  background-color: #f9f9f9;
  color: #6c757d;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.profile-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.profile-section h1 {
  font-size: 4rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

h3 {
  font-size: 3rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

p {
  font-size: 1.2rem;
  margin-top: 20px;
  line-height: 1.6;
}

.skills {
  margin-top: 40px;
  text-align: left;
}

.skills h3 {
  font-size: 2rem;
}

.skills ul {
  list-style-type: none;
  padding: 0;
}

.skills li {
  font-size: 1.1rem;
  margin: 8px 0;
}

.contact {
  margin-top: 40px;
  text-align: left;
}

.contact h3 {
  font-size: 2rem;
}

.contact .social-links {
  margin-top: 10px;
}

.social-link {
  display: inline-block;
  padding: 10px;
  margin: 5px;
  background-color: #333;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.social-link:hover {
  background-color: #444;
}

.button {
  padding: 10px 20px;
  background-color: #205b43;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 30px;
}

.button:hover {
  background-color: #a5dfc8;
  color: #205b43;
  border: 1px solid #205b43;
  font-weight: bold;
}

.download-cv {
  margin-top: 30px;
}
</style>