<template>
  <section class="contact">
    <h1 class="form-title">Contactez-moi</h1>

    <form @submit.prevent="submitForm" class="contact-form">
      <label for="name">Nom</label>
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="Votre nom"
        required
      />

      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="Votre adresse email"
        required
      />

      <label for="message">Message</label>
      <textarea
        id="message"
        v-model="message"
        placeholder="Votre message"
        required
      ></textarea>

      <button type="submit" :disabled="loading">
        {{ loading ? "Envoi en cours..." : "Envoyer" }}
      </button>

      <p v-if="successMessage" class="success-message">
        {{ successMessage }}
      </p>

      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>
    </form>
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
.contact {
  padding: 60px 20px;
  padding-top: 100px;
  text-align: center;
}

.form-title {
  font-size: 3rem;
  font-family: "Formula Condensed", sans-serif;
  color: #205b43;
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 500px;
  margin: 0 auto;
}

.contact-form label {
  width: 100%;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  color: #205b43;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  font-size: 1rem;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #205b43;
  box-shadow: 0 0 0 3px rgba(32, 91, 67, 0.12);
}

.contact-form textarea {
  min-height: 160px;
  resize: vertical;
}

.contact-form button {
  margin-top: 10px;
  padding: 12px 22px;
  background-color: #205b43;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.contact-form button:hover {
  transform: translateY(-2px);
  opacity: 0.95;
}

.contact-form button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.success-message {
  color: #1f7a3d;
  font-weight: 600;
  margin-top: 10px;
}

.error-message {
  color: #c0392b;
  font-weight: 600;
  margin-top: 10px;
}
</style>