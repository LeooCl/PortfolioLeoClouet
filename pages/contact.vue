<template>
  <section class="contact-page">
    <div class="contact-bg"></div>

    <div class="contact-container">
      <div class="contact-layout">
        <div class="contact-intro">
          <span class="section-badge">Contact</span>
          <h1>Parlons de votre projet</h1>
          <p class="intro-text">
            Vous avez une idée, une collaboration en tête ou simplement une
            question ? N’hésitez pas à m’écrire. Je serai ravi d’échanger avec
            vous et de discuter de vos besoins.
          </p>

          <div class="contact-info-grid">
            <div class="info-card">
              <h3>Disponibilité</h3>
              <p>Ouvert aux projets web, collaborations et opportunités.</p>
            </div>

            <div class="info-card">
              <h3>Réponse</h3>
              <p>Je fais de mon mieux pour répondre rapidement à chaque message.</p>
            </div>

            <div class="info-card">
              <h3>Projets</h3>
              <p>Sites vitrines, interfaces modernes, front-end et back-end.</p>
            </div>

            <div class="info-card">
              <h3>Objectif</h3>
              <p>Créer des expériences web propres, efficaces et agréables.</p>
            </div>
          </div>
        </div>

        <div class="form-card">
          <div class="form-card-header">
            <h2>Envoyez-moi un message</h2>
            <p>
              Remplissez le formulaire ci-dessous, je vous répondrai dès que
              possible.
            </p>
          </div>

          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">Nom</label>
              <input
                type="text"
                id="name"
                v-model="name"
                placeholder="Votre nom"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="Votre adresse email"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="message"
                placeholder="Décrivez votre demande ou votre projet..."
                required
              ></textarea>
            </div>

            <button type="submit" :disabled="loading" class="submit-button">
              {{ loading ? "Envoi en cours..." : "Envoyer le message" }}
            </button>

            <transition name="fade">
              <p v-if="successMessage" class="success-message">
                {{ successMessage }}
              </p>
            </transition>

            <transition name="fade">
              <p v-if="errorMessage" class="error-message">
                {{ errorMessage }}
              </p>
            </transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const config = useRuntimeConfig();

const name = ref("");
const email = ref("");
const message = ref("");

const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const submitForm = async () => {
  successMessage.value = "";
  errorMessage.value = "";
  loading.value = true;

  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
  };

  try {
    const response = await emailjs.send(
      config.public.emailjsServiceId,
      config.public.emailjsTemplateId,
      templateParams,
      config.public.emailjsPublicKey
    );

    console.log("Email envoyé avec succès :", response);

    successMessage.value = "Votre message a bien été envoyé !";
    name.value = "";
    email.value = "";
    message.value = "";
  } catch (error) {
    console.error("Erreur complète EmailJS :", error);

    if (error?.text) {
      errorMessage.value = `Erreur : ${error.text}`;
    } else if (error?.message) {
      errorMessage.value = `Erreur : ${error.message}`;
    } else {
      errorMessage.value =
        "Une erreur est survenue lors de l'envoi. Vérifiez votre configuration EmailJS.";
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.contact-page {
  position: relative;
  overflow: hidden;
  padding: 100px 20px 80px;
  background: linear-gradient(180deg, #f8fbfa 0%, #eef6f2 100%);
  min-height: 100vh;
}

.contact-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top left, rgba(32, 91, 67, 0.12), transparent 30%),
    radial-gradient(circle at bottom right, rgba(0, 129, 167, 0.1), transparent 30%);
  pointer-events: none;
}

.contact-container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
}

.contact-intro {
  padding: 20px 10px 20px 0;
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

.contact-intro h1 {
  margin: 0 0 20px;
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: 1;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.intro-text {
  max-width: 560px;
  font-size: 1.12rem;
  line-height: 1.8;
  color: #5f6d78;
  margin-bottom: 32px;
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.info-card {
  padding: 22px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(32, 91, 67, 0.08);
  box-shadow: 0 12px 32px rgba(25, 50, 40, 0.06);
}

.info-card h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.info-card p {
  margin: 0;
  color: #667580;
  line-height: 1.7;
  font-size: 0.98rem;
}

.form-card {
  padding: 34px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(32, 91, 67, 0.08);
  box-shadow: 0 20px 60px rgba(25, 50, 40, 0.08);
}

.form-card-header {
  margin-bottom: 24px;
}

.form-card-header h2 {
  margin: 0 0 10px;
  font-size: 2.2rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
}

.form-card-header p {
  margin: 0;
  color: #667580;
  line-height: 1.7;
  font-size: 1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-form label {
  font-size: 0.98rem;
  font-weight: 600;
  color: #205b43;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #d7e2dc;
  border-radius: 16px;
  font-size: 1rem;
  box-sizing: border-box;
  outline: none;
  background: #ffffff;
  color: #44515c;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #97a3ad;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #205b43;
  box-shadow: 0 0 0 4px rgba(32, 91, 67, 0.12);
  transform: translateY(-1px);
}

.contact-form textarea {
  min-height: 180px;
  resize: vertical;
}

.submit-button {
  margin-top: 6px;
  padding: 14px 22px;
  background: linear-gradient(135deg, #205b43 0%, #2f7a5a 100%);
  color: #ffffff;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    opacity 0.25s ease;
  box-shadow: 0 12px 28px rgba(32, 91, 67, 0.2);
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(32, 91, 67, 0.24);
}

.submit-button:disabled {
  opacity: 0.75;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.success-message,
.error-message {
  margin: 4px 0 0;
  padding: 14px 16px;
  border-radius: 14px;
  font-weight: 600;
  font-size: 0.97rem;
}

.success-message {
  background: rgba(31, 122, 61, 0.12);
  color: #1f7a3d;
  border: 1px solid rgba(31, 122, 61, 0.2);
}

.error-message {
  background: rgba(192, 57, 43, 0.1);
  color: #c0392b;
  border: 1px solid rgba(192, 57, 43, 0.18);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

@media (max-width: 992px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .contact-intro {
    padding: 0;
  }

  .contact-info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .contact-page {
    padding: 90px 16px 60px;
  }

  .contact-intro h1 {
    font-size: 3rem;
  }

  .contact-info-grid {
    grid-template-columns: 1fr;
  }

  .form-card {
    padding: 24px;
    border-radius: 22px;
  }

  .form-card-header h2 {
    font-size: 1.9rem;
  }
}
</style>